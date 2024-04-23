//stat data number, title, richtext editor 

import type { Block } from 'payload/types'

export const RichTextBlock: Block = {
  slug: 'richText',
  fields: [
    {
      name: 'richText',
      label: 'Description',
      type: 'richText'
    },
  ],
}
