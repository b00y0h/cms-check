import { payloadCloud } from '@payloadcms/plugin-cloud'
import FormBuilder from '@payloadcms/plugin-form-builder'
import nestedDocs from '@payloadcms/plugin-nested-docs'
import seo from '@payloadcms/plugin-seo'
import type { GenerateTitle } from '@payloadcms/plugin-seo/types'
import path from 'path'
import { buildConfig } from 'payload/config'

import { CarouselCards } from './collections/CarouselCards'
import { LeadTypes } from './collections/LeadTypes'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Partners } from './collections/Partners'
import { Posts } from './collections/Posts'
import Users from './collections/Users'
import NoIndex from './components/custom/Noindex'

const generateTitle: GenerateTitle = () => {
  return 'Appliy CMS'
}

const mockModulePath = path.resolve(__dirname, './emptyModuleMock.js')

export default buildConfig({
  admin: {
    meta: {
      titleSuffix: '- Appily',
      favicon: '/assets/favicon.svg',
      ogImage: '/assets/logo.svg',
    },
    user: Users.slug,
    components: {
      // graphics: {
      //   Logo,
      //   Icon,
      // },
      // The BeforeDashboard component renders the 'welcome' block that you see after logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import BeforeDashboard statement on line 15.
      // beforeDashboard: [BeforeDashboard],
      beforeLogin: [NoIndex],
    },
    webpack: config => ({
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          express: mockModulePath,
        },
      },
    }),
  },
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [Users, Pages, Posts, Media, Partners, CarouselCards, LeadTypes],
  // globals: [Header, Footer],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  ...(process.env.PAYLOAD_PUBLIC_SITE_URL
    ? {
        cors: [process.env.PAYLOAD_PUBLIC_SITE_URL].filter(Boolean),
        csrf: [process.env.PAYLOAD_PUBLIC_SITE_URL].filter(Boolean),
      }
    : {}),
  plugins: [
    FormBuilder({
      fields: {
        payment: false,
      },
    }),
    nestedDocs({
      collections: ['pages'],
      generateLabel: (_, doc) => doc.title as string,
      generateURL: docs => docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
    }),
    // redirects({
    //   collections: ['pages'],
    // }),
    seo({
      collections: ['pages'],
      generateTitle,
      uploadsCollection: 'media',
    }),
    payloadCloud(),
  ],
})
