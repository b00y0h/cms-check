import type { Block } from 'payload/types'
import { backgroundColor } from '../../fields/backgroundColor'
import linkGroup from '../../fields/linkGroup'

export const Tabsection: Block = {
  slug: 'tabsection',
  fields: [
    backgroundColor({ overrides: {name: 'tabSectionBackgroundColor'}}),
    { 
      name: 'tabs',
      label: 'Tabs',
      type: 'array',
      fields: [
        {
            name: 'tabicon',
            label: 'Icon',
            type: 'upload',
            relationTo: 'media',
        },
        {
          name: 'shortTitle',
          label: 'Short Title',
          type: 'text',
          maxLength: 15, // Limit the characters of the title to 15
        },
        {
          name: 'contentTitle',
          label: 'Content Title',
          type: 'text',
        },
       
        {
            name: 'description',
            label: 'Description',
            type: 'richText',
            required: false
          },
        linkGroup({
            overrides: {
                name: 'tabButtongroup'
              },
            appearances: ['default','primary', 'secondary'],
          }),
        {
          name: 'useSameIcon',
          label: 'Use Same Icon as Tab Icon',
          type: 'checkbox',
        },
        {
            name: 'alternateImage',
            label: 'Alternate Image',
            type: 'upload',
            relationTo: 'media',
            admin: {
                condition: (_, { useSameIcon } = {}) => !useSameIcon
              }
        }
      ],
    },
    
  ],
};