//stat data number, title, richtext editor 

import type { Block } from 'payload/types'
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
  {
    name: 'richText',
    label: 'Description',
    type: 'richText'
  },
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
