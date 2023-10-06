import express from 'express'
import payload from 'payload'
import cors from 'cors'

// eslint-disable-next-line
require('dotenv').config()

import { seed } from './seed'

const app = express()

const allowedOriginPattern = /.*-eab-agency\.vercel\.app$/; // Regular expression pattern for matching subdomains
const allowedURL = process.env.PAYLOAD_PUBLIC_SITE_URL; // Specific URL allowed

const corsOptions: cors.CorsOptions = {
  origin: [
      process.env.PAYLOAD_PUBLIC_SITE_URL,
      "*"
    ],
};

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
