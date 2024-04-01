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
import { RichTextBlock } from '../../singleBlocks/RichTextBlock'
import { MediaBlock } from '../Media'
import { ButtonGroupBlock } from '../../singleBlocks/ButtonGroupBlock'


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
    name: 'blocks',
    type: 'blocks',
    label: 'Add Block',
    required: true,
    blocks: [ SingleStatBlock, TestimonialBlock, CareerBlock, ComparisonBlock, AccordionBlock, RichTextBlock, MediaBlock, ButtonGroupBlock],
  }
]

export const Content: Block = {
  slug: 'content',
  fields: [
    colorSchema({}),
    {
      name: 'enableHighlight', // required
      type: 'checkbox', // required
      label: 'Click here to see highlighted effect',
      defaultValue: false,
    }, {
      name: 'type',
      type: 'select',
      label:'Select Row or Column',
      defaultValue: 'column',
      options: [
        {
          value: 'row',
          label: 'Row',
        },
        {
          value: 'column',
          label: 'Column',
        }
      ],
    },
    {
      name: 'rows',
      type: 'array',
      fields: [
        {
          name: 'columns',
          type: 'array',
          fields: columnFields,
        },
      ],
      admin: {
        condition: (_, { type } = {}) => ['row'].includes(type),
      }
    },
    {
      name: 'columns',
      type: 'array',
      fields: columnFields,
      admin: {
        condition: (_, { type } = {}) => ['column'].includes(type),
      }
    },
  ],
}
