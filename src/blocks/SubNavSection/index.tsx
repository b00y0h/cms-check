
import type { Block, Field } from 'payload/types'
import linkGroup from '../../fields/linkGroup'
import { backgroundColor } from '../../fields/backgroundColor'

export const navigationField: Field[] = [

  {
    name: 'title',
    label: 'Title',
    type: 'text',
    required: true
  },
  {
    name: 'url',
    label: 'URL',
    type: 'text',
  }
]
export const SubNav: Block = {
  labels: {
    singular: 'Sub Navigation',
    plural: 'Sub Navigations',
  },
  slug: 'subNavigation',
  fields: [
    backgroundColor({ overrides: { name: 'subNavBackgroundColor' } }),
    {
      label: 'Nav Item',
      name: 'navigationItem',
      type: 'array',
      fields: navigationField
    }
  ],
}
