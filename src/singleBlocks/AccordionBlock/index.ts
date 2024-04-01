import type { Block, Field } from 'payload/types'
import richText from '../../fields/richText'
import { colorSchema } from '../../fields/colorSchema'
import linkGroup from '../../fields/linkGroup'


const AccordionFields: Field[] = [
  {
    name: 'title',
    label: 'Title',
    required: true,
    type: 'text'
  },
  richText({}),
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
