//stat data number, title, richtext editor 

import { BlocksFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import type { Block } from 'payload/types'
import { MediaBlock } from '../MediaBlock'
import { AccordionBlock } from '../AccordionBlock'
import { CareerBlock } from '../CareerBlock'


export const RichTextBlock: Block = {
  slug: 'richText',
  fields: [
    {
      name: 'richText',
      label: 'Description',
      type: 'richText',
      required: true
      // editor: lexicalEditor({
      //   features: ({ defaultFeatures }) => [
      //     ...defaultFeatures,
      //     BlocksFeature({
      //       blocks: [CareerBlock]
      //     }),
      //   ]
      // })
    },
  ],
}
