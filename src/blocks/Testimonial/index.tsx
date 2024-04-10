//stat data number, title, richtext editor 

import type { Block } from 'payload/types'
import richText from '../../fields/richText'
import linkGroup from '../../fields/linkGroup'
import { backgroundColor } from '../../fields/backgroundColor'

export const Testimonial: Block = {
  slug: 'testimonial',
  fields: [
    {
    name: 'author',
    label: 'Author',
    type: 'text'
  },
  backgroundColor({}),
  richText({}),
  {
    name: 'authortitle',
    label: 'Author Title',
    type: 'text'
  },
  linkGroup({
    appearances: ['default','primary', 'secondary'],
  }),
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
