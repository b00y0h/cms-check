
import type { Block } from 'payload/types'
import linkGroup from '../../fields/linkGroup'
import { backgroundColor } from '../../fields/backgroundColor'

export const HighlightCTA: Block = {
  slug: 'highlightCTA',
  fields: [
  backgroundColor({ overrides: { name: 'highlightCTABackgroundColor' } }),
  {
    name: 'title',
    label: 'Title',
    type: 'text'
  },
  {
    name: 'richText',
    label: 'Description',
    type: 'richText',
    required: false
  },
  linkGroup({
    overrides: {
        name: 'highlightedctaLinks'
      },
    appearances: ['default','primary', 'secondary'],
  }),
  {
    name: 'imagealignment',
    type: 'select',
    label: 'Image alignment',
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
  },
  {
    name: 'image',
    type: 'upload',
    relationTo: 'media',
  },
  ],
}
