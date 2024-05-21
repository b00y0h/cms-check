import { webpackBundler } from '@payloadcms/bundler-webpack'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloud } from '@payloadcms/plugin-cloud'
import { cloudStorage } from '@payloadcms/plugin-cloud-storage'
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3'
import FormBuilder from '@payloadcms/plugin-form-builder'
import nestedDocs from '@payloadcms/plugin-nested-docs'
import seo from '@payloadcms/plugin-seo'
import type { GenerateTitle } from '@payloadcms/plugin-seo/types'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
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
import { Footer } from './globals/Footer'
import { Header } from './globals/Header'

const generateTitle: GenerateTitle = () => {
	return "Appliy CMS";
};

const mockModulePath = path.resolve(__dirname, "./emptyModuleMock.js");

const storageAdapter = s3Adapter({
  config: {
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    },
    region: process.env.S3_REGION,
  },
  bucket: process.env.S3_BUCKET,
})

export default buildConfig({
	admin: {
		livePreview: {
			url: process.env.PAYLOAD_PUBLIC_SITE_URL,
			breakpoints: [
				{
					label: "Mobile",
					name: "mobile",
					width: 375,
					height: 667,
				},
			],
		},
		bundler: webpackBundler(),
		meta: {
			titleSuffix: "- Appily",
			favicon: "/assets/favicon.svg",
			ogImage: "/assets/logo.svg",
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
		webpack: (config) => ({
			...config,
			resolve: {
				...config.resolve,
				alias: {
					...config.resolve?.alias,
					express: mockModulePath,
				},
			},
		}),
		css: path.resolve(__dirname, "admin/customStyles.scss"),
	},
	editor: lexicalEditor({}),
	serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
	collections: [Users, Pages, Posts, Media, Partners, CarouselCards, LeadTypes],
	globals: [Header, Footer],
	typescript: {
		outputFile: path.resolve(__dirname, "payload-types.ts"),
	},
	graphQL: {
		schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
	},
	db: mongooseAdapter({
		url: process.env.MONGODB_URI,
	}),
	...(process.env.PAYLOAD_PUBLIC_SITE_URL
		? {
				cors: [process.env.PAYLOAD_PUBLIC_SITE_URL].filter(Boolean),
				csrf: [process.env.PAYLOAD_PUBLIC_SITE_URL].filter(Boolean),
		  }
		: {}),
	plugins: [
		cloudStorage({
			collections: {
			  media: {
				adapter: storageAdapter,
			  },
			},
		  }),
		FormBuilder({
			fields: {
				payment: false,
			},
		}),
		nestedDocs({
			collections: ["pages"],
			generateLabel: (_, doc) => doc.title as string,
			generateURL: (docs) =>
				docs.reduce((url, doc) => `${url}/${doc.slug}`, ""),
		}),
		// redirects({
		//   collections: ['pages'],
		// }),
		seo({
			collections: ["pages"],
			generateTitle,
			uploadsCollection: "media",
		}),
		payloadCloud(),
	],
});
