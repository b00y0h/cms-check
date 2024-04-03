//stat data number, title, richtext editor 

import type { Block, Field } from 'payload/types'

import richText from '../../fields/richText'

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
    {
      name: 'statistics',
      type:'array',
      fields: statFields
    },
    {
      name:'source',
      type:'text',
      label: 'Source'
    }
  ],
}
