import type { Block } from 'payload/types'


export const Archive: Block = {
  slug: 'archive',
  labels: {
    singular: 'Archive',
    plural: 'Archives',
  },
  fields: [
    // richText({
    //   name: 'introContent',
    //   label: 'Intro Content',
    // }),
    {
      name: 'introContent',
      label: 'Intro Content',
      type: 'richText'
    },
    {
      name: 'populateBy',
      type: 'select',
      defaultValue: 'collection',
      options: [
        {
          label: 'Collection',
          value: 'collection',
        },
        {
          label: 'Individual Selection',
          value: 'selection',
        },
      ],
    },
    {
      type: 'select',
      name: 'relationTo',
      label: 'Collections To Show',
      defaultValue: 'pages',
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
      },
      options: [
        {
          label: 'Pages',
          value: 'pages',
        },
      ],
    },
    // {
    //   type: 'relationship',
    //   name: 'categories',
    //   label: 'Categories To Show',
    //   relationTo: 'categories',
    //   hasMany: true,
    //   admin: {
    //     condition: (_, siblingData) => siblingData.populateBy === 'collection',
    //   },
    // },
    {
      type: 'number',
      name: 'limit',
      label: 'Limit',
      defaultValue: 10,
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
        step: 1,
      },
    },
    {
      type: 'relationship',
      name: 'selectedDocs',
      label: 'Selection',
      relationTo: ['pages'],
      hasMany: true,
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'selection',
      },
    },
    {
      type: 'relationship',
      name: 'populatedDocs',
      label: 'Populated Docs',
      relationTo: ['pages'],
      hasMany: true,
      admin: {
        disabled: true,
        description: 'This field is auto-populated after-read',
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
      },
    },
    {
      type: 'number',
      name: 'populatedDocsTotal',
      label: 'Populated Docs Total',
      admin: {
        step: 1,
        disabled: true,
        description: 'This field is auto-populated after-read',
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
      },
    },
  ],
}
