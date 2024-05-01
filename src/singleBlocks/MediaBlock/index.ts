//stat data number, title, richtext editor 

import type { Block } from 'payload/types'

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
