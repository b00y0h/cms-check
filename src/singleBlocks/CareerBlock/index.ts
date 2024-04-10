//stat data number, title, richtext editor 

import type { Block } from 'payload/types'
import richText from '../../fields/richText'
import { colorSchema } from '../../fields/colorSchema'
import linkGroup from '../../fields/linkGroup'
import { backgroundColor } from '../../fields/backgroundColor'

export const CareerBlock: Block = {
  slug: 'career',
  fields: [
    backgroundColor({ overrides: { name: 'careerBlockBackgroundColor' } }),
    {
    name: 'title',
    label: 'Title',
    type: 'text'
  },
  richText({}),
  {
    name: 'image',
    type: 'upload',
    relationTo: 'media',
    required: true,
  },
  linkGroup({
    appearances: ['primary', 'secondary'],
  })
  ],
}
