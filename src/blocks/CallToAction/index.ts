import type { Block } from 'payload/types'

import { backgroundColor } from '../../fields/backgroundColor'
import linkGroup from '../../fields/linkGroup'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const CallToAction: Block = {
  slug: 'cta',
  labels: {
    singular: 'Call to Action',
    plural: 'Calls to Action',
  },
  fields: [
    backgroundColor({ overrides: { name: 'ctaBackgroundColor' } }),
    {name: 'richText',
  label: 'Description',
type:'richText',
editor: lexicalEditor({})},
    linkGroup({
      appearances: ['default','primary', 'secondary'],
      overrides: {
        maxRows: 2,
      },
    }),
  ],
}
