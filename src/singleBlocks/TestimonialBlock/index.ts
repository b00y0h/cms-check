//stat data number, title, richtext editor 

import type { Block } from 'payload/types'
import richText from '../../fields/richText'
import { colorSchema } from '../../fields/colorSchema'
import linkGroup from '../../fields/linkGroup'

export const TestimonialBlock: Block = {
  slug: 'testimonial',
  fields: [
    {
    name: 'author',
    label: 'Author',
    type: 'text'
  },
  richText({}),
  {
    name: 'authortitle',
    label: 'Author Title',
    type: 'text'
  },
  {
    name: 'alignment',
    type: 'select',
    label: 'Alignment',
    defaultValue: 'center',
    options: [
        {
            label: 'Left',
            value: 'left'
        },
        {
            label: 'Center',
            value: 'center'
        },
        {
            label: 'Right',
            value: 'right'
        }
    ]
  }
  ],
}
