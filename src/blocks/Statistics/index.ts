//stat data number, title, richtext editor 

import type { Block, Field } from 'payload/types'

import link from '../../fields/link'
import richText from '../../fields/richText'
import { colorSchema } from '../../fields/colorSchema'

export const statFields: Field[] = [
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
  richText({}),
]

export const Statistics: Block = {
  slug: 'statistics',
  fields: [
    colorSchema({}),
    {
      name: 'statistics',
      type:'array',
      fields: statFields
    },
  ],
}
