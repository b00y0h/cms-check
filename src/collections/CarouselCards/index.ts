import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
import { adminsOrPublished } from '../../access/adminsOrPublished'
import linkGroup from '../../fields/linkGroup'
import richText from '../../fields/richText'
import { getLocationPartner } from '../../hooks/location'
import { populatePublishedDate } from '../../hooks/populatePublishedDate'
import { formatAppURL } from '../../hooks/revalidatePage'

export const CarouselCards: CollectionConfig = {
  slug: 'carousel-cards',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'updatedAt'],
    preview: doc =>
      `${process.env.PAYLOAD_PUBLIC_SITE_URL}/api/preview?url=${formatAppURL({ doc })}`,
  },
  hooks: {
    beforeChange: [populatePublishedDate],
  },
  access: {
    read: adminsOrPublished,
    update: admins,
    create: admins,
    delete: admins,
  },
  fields: [
    {
      name: 'partner',
      type: 'relationship',
      relationTo: 'partners',
      label: 'Associated Partner',
    },
    {
      name: 'partnerState',
      type: 'text',
      label: false,
      admin: {
        hidden: true,
      },
      hooks: {
        beforeChange: [
          ({ siblingData }) => {
            // Mutate the sibling data to prevent DB storage
            // eslint-disable-next-line no-param-reassign
            siblingData.partnerState = ''
          },
        ],
        afterRead: [getLocationPartner],
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
