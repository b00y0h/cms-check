//stat data number, title, richtext editor 

import type { Block } from 'payload/types'
import richText from '../../fields/richText'

export const RichTextBlock: Block = {
  slug: 'richText',
  fields: [
  richText({}),
  ],
}
