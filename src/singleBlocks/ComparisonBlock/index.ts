//stat data number, title, richtext editor 

import type { Block } from 'payload/types'
import richText from '../../fields/richText'
import { colorSchema } from '../../fields/colorSchema'
import linkGroup from '../../fields/linkGroup'

export const ComparisonBlock: Block = {
  slug: 'comparison',
  fields: [
    {
    name: 'title',
    label: 'Title',
    type: 'text'
  },
  richText({}),
  {
    name: 'icon',
    type: 'upload',
    relationTo: 'media',
    required: true,
  },
  linkGroup({
    appearances: ['primary', 'secondary'],
  })
  ],
}
