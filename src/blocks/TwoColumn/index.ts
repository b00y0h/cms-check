import type { Block, Field } from 'payload/types'

import { backgroundColor } from '../../fields/backgroundColor'
import link from '../../fields/link'
import richText from '../../fields/richText'
import { colorSchema } from '../../fields/colorSchema'
import { SingleStatBlock } from '../../singleBlocks/StatisticsBlock'
import { TestimonialBlock } from '../../singleBlocks/TestimonialBlock'
import { CareerBlock } from '../../singleBlocks/CareerBlock'
import { ComparisonBlock } from '../../singleBlocks/ComparisonBlock'
import { AccordionBlock } from '../../singleBlocks/AccordionBlock'


const columnFields: Field[] = [
  {
    name: 'size',
    type: 'select',
    defaultValue: 'oneThird',
    options: [
      {
        value: 'oneThird',
        label: 'One Third',
      },
      {
        value: 'half',
        label: 'Half',
      },
      {
        value: 'twoThirds',
        label: 'Two Thirds',
      },
      {
        value: 'full',
        label: 'Full',
      },
    ],
  },
  {
    name: 'Block',
    label: 'Add Block',
    type: 'blocks',
    required: true,
    blocks: [SingleStatBlock, TestimonialBlock, CareerBlock, ComparisonBlock, AccordionBlock],
  }
]

export const TwoColumnBlock: Block = {
  slug: 'twoColumnBlock',
  fields: [
    colorSchema({}),
    {
        name: 'enableHighlight', // required
        type: 'checkbox', // required
        label: 'Click here to see highlighted effect',
        defaultValue: false,
      },
      // admin: {
      //   condition: (_, { type } = {}) => ['resultPage'].includes(type),
      // },
      {
        name: 'rows',
        type: 'array',
        fields: columnFields,
        admin: {
        condition: (_, { type } = {}) => ['resultPage'].includes(type),
      },
      },
    {
      name: 'columns',
      type: 'array',
      fields: columnFields,
    },
  ],
}
