//stat data number, title, richtext editor 

import type { Block, Field } from 'payload/types'

import richText from '../../fields/richText'
import { backgroundColor } from '../../fields/backgroundColor'

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
    backgroundColor({}),
    {
      name: 'statistics',
      type:'array',
      fields: statFields,
      maxRows: 8,
    },
    {
      name:'source',
      type:'text',
      label: 'Source'
    }
  ],
}
