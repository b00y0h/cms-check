
import type { Block } from 'payload/types'

export const SingleStatBlock: Block = {
  slug: 'stats',
  fields: [
    {
        name: 'number',
        label: 'Number',
        type: 'text',
        required: true
    },
  {
    name: 'title',
    label: 'Title',
    type: 'text'
  },
  // richText({}),
  {
    name: 'richText',
    label: 'Description',
    type: 'richText'
  },
  ],
}
