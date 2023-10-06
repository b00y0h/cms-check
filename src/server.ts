import express from 'express'
import payload from 'payload'
import cors from 'cors'

// eslint-disable-next-line
require('dotenv').config()

import { seed } from './seed'

const app = express()

const allowedOrigins = [
  process.env.PAYLOAD_PUBLIC_SITE_URL,
  '*-eab-agency.vercel.app',
];

var corsOptions = {
  origin: (origin, callback) => {
    console.log("🚀 ~ file: server.ts:19 ~ callback:", callback)
    console.log("🚀 ~ file: server.ts:19 ~ origin:", origin)
    // if (allowedOrigins.indexOf(origin) !== -1) {
    //   callback(null, true)
    // } else {
    //   callback(new Error())
    // }
  }
}

app.use(cors(corsOptions));



// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin')
})

const start = async (): Promise<void> => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.MONGODB_URI,
    express: app,
    onInit: () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  if (process.env.PAYLOAD_SEED === 'true') {
    payload.logger.info('Seeding Payload...')
    await seed(payload)
    payload.logger.info('Done.')
  }

  app.listen(process.env.PORT)
}

start()
