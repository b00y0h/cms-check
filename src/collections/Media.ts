import path from 'path'
import type { CollectionConfig } from 'payload/types'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: path.resolve(__dirname, '../../media'),
    staticURL: '/media',
    imageSizes: [
			{
				name: "squareSmall",
				width: 480,
				height: 480,
				position: "centre",
			},
			{
				name: "squareMedium",
				width: 900,
				height: 900,
				position: "centre",
			}
		],
    adminThumbnail: "squareSmall",
		mimeTypes: ["image/*"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'caption',
      type: 'richText',
    },
  ],
}
