//stat data number, title, richtext editor 

import type { Block } from 'payload/types'
import linkGroup from '../../fields/linkGroup'
import { backgroundColor } from '../../fields/backgroundColor'

export const CalloutSection: Block = {
  slug: 'callout',
  fields: [
  backgroundColor({ overrides: { name: 'callOutBackgroundColor' } }),
  // richText({
  //   name: 'calloutTitle',
  //   label: 'Title',
  // }),
  {
    name: 'calloutTitle',
    label: 'Title',
    type: 'richText'
  },
  {
    name: 'richText',
    label: 'Description',
    type: 'richText',
    required: false
  },
  linkGroup({
    overrides: {
        name: 'calloutLinks'
      },
    appearances: ['default','primary', 'secondary'],
  })
  ],
}
