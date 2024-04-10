//stat data number, title, richtext editor 

import type { Block } from 'payload/types'
import linkGroup from '../../fields/linkGroup'

export const ButtonGroupBlock: Block = {
  slug: 'ButtonGroup',
  fields: [
    linkGroup({
      appearances: ['default','primary', 'secondary'],
    })
  ],
}
