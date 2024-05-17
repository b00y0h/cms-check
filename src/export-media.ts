/* eslint-disable no-console */
import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'
import payload from 'payload'
import { promisify } from 'util'
const writeFile = promisify(fs.writeFile)

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})

const { PAYLOAD_SECRET, MONGODB_URI } = process.env

const BATCH_SIZE = 20

const exportMedia = async (): Promise<void> => {
  await payload.init({
    secret: PAYLOAD_SECRET,
    mongoURL: MONGODB_URI,
    local: true, // Enables local mode, doesn't spin up a server or frontend
  })

  // Fetch all media
  const allMedia = await payload.find({
    collection: 'media',
    limit: 9999,
  })

  // Split into batches to avoid memory or rate limit issues
  const batches = chunk(allMedia.docs, BATCH_SIZE)

  // Create output directory if it doesn't exist
  const outputDir = path.resolve(__dirname, '../export')
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir)
  }

  for (const batch of batches) {
    await Promise.all(
      batch.map(async media => {
        console.log(`Outputting ${media.filename}, ${media.url}...`)
        await writeImageFromUrl(media.url, path.resolve(outputDir, media.filename))
      }),
    )
  }
  console.log('Done')
  process.exit(0)
}

exportMedia()

function chunk<T>(array: T[], size = 5): T[][] {
  size = Math.max(size, 0)
  const length = array == null ? 0 : array.length
  console.log('🚀 ~ array.length:', array.length)
  if (!length || size < 1) {
    return []
  }
  let index = 0
  let resIndex = 0
  const result = new Array(Math.ceil(length / size))

  while (index < length) {
    result[resIndex++] = array.slice(index, (index += size))
  }
  return result
}

async function writeImageFromUrl(url: string, outputPath: string): Promise<void> {
  const fetched = await fetch(url)
  const blob = await fetched.blob()
  const buffer = await blob.arrayBuffer()
  await writeFile(outputPath, Buffer.from(buffer))
}
