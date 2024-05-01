import type { Block, Field } from 'payload/types'
import linkGroup from '../../fields/linkGroup'


const AccordionFields: Field[] = [
  {
    name: 'title',
    label: 'Title',
    required: true,
    type: 'text'
  },
  {
    name: 'richText',
    label: 'Description',
    type: 'richText'
  },
  linkGroup({
    appearances: ['primary', 'secondary'],
  })
]

export const AccordionBlock: Block = {
  slug: 'accordion',
  fields: [
    {
    name: 'numberedItems',
    label: 'Numbered Items',
    type: 'checkbox'
  },
  {
    name: 'accordions',
    type: 'array',
    label:'Add Accodrion',
    fields: AccordionFields,
  },
  ],
}
