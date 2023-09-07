import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
import { anyone } from '../../access/anyone'
import linkGroup from '../../fields/linkGroup'
import richText from '../../fields/richText'
import { populatePartnerState } from '../../hooks/populatePartnerState'
import { formatAppURL } from '../../hooks/revalidatePage'

export const CarouselCards: CollectionConfig = {
  slug: 'carousel-cards',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['admintitle', 'leadTypes', 'partner'],
    preview: doc =>
      `${process.env.PAYLOAD_PUBLIC_SITE_URL}/api/preview?url=${formatAppURL({ doc })}`,
  },
  hooks: {
    beforeChange: [populatePartnerState],
  },
  access: {
    read: anyone,
    update: admins,
    create: admins,
    delete: admins,
  },
  fields: [
    {
      name: 'admintitle',
      type: 'text',
      label: 'Title (Internal)',
      admin: {
        position: 'sidebar',
        description:
          'This title is only used in the admin panel. It will not be displayed on the front end. Use it to differentiate between carousel cards with the same partner.',
      },
    },
    {
      name: 'partner',
      type: 'relationship',
      relationTo: 'partners',
      label: 'Associated Partner',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'leadTypes',
      type: 'relationship',
      relationTo: 'lead-types',
      label: 'Lead Type',
      required: true,
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'partnerState',
      type: 'text',
      admin: {
        hidden: true,
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
    },
    richText({
      name: 'description',
      admin: {
        elements: ['link'],
      },
    }),
    linkGroup({
      appearances: false,
      overrides: {
        maxRows: 1,
      },
    }),
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
