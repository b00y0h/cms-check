//stat data number, title, richtext editor 

import type { Block } from 'payload/types'
import linkGroup from '../../fields/linkGroup'
import { backgroundColor } from '../../fields/backgroundColor'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const CareerBlock: Block = {
  slug: 'career',
  fields: [
    backgroundColor({ overrides: { name: 'careerBlockBackgroundColor' } }),
    {
    name: 'title',
    label: 'Title',
    type: 'text'
  },
  {
    name: 'richText',
    label: 'Description',
    type: 'richText',
    // required: true,
    // editor: lexicalEditor({})
  },
  {
    name: 'image',
    type: 'upload',
    relationTo: 'media',
    required: true,
  },
  linkGroup({
    appearances: ['primary', 'secondary'],
  })
  ],
}
