//stat data number, title, richtext editor 

import type { Block } from 'payload/types'
import richText from '../../fields/richText'

export const MediaBlock: Block = {
  slug: 'mediaBlock',
  fields: [
    {
        name: 'image',
        type: 'upload',
        relationTo: 'media',
        required: true,
      },
  ],
}
