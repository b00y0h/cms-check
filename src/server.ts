import cors from 'cors'
import express from 'express'
import payload from 'payload'

// eslint-disable-next-line
require('dotenv').config()

import { seed } from './seed'

const app = express()

const allowedOrigins = [
  process.env.PAYLOAD_PUBLIC_SITE_URL,
  process.env.PAYLOAD_PUBLIC_SERVER_URL,
  'http://localhost:3000',
  'https://advance.appily.com',
  'https://www.advance.appily.com',
  '.advance.appily.com',
  '-eab-agency.vercel.app',
  'amplifyapp.com',
  'https://qa-appily-cms.payloadcms.app',
]

var corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.some(pattern => origin.includes(pattern))) {
      callback(null, true)
    } else {
      callback(new Error(`Not allowed by CORS: ${origin}`))
    }
  },
}

app.use(cors(corsOptions))

app.use((req, res, next) => {
  res.setHeader('X-Robots-Tag', 'noindex, nofollow')
  next()
})

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
