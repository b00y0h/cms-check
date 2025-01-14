import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
import { anyone } from '../../access/anyone'
import { partner } from '../../fields/partner'
import { slugField } from '../../fields/slug'
import { populatePublishedDate } from '../../hooks/populatePublishedDate'
import { formatAppURL } from '../../hooks/revalidatePage'

export const Partners: CollectionConfig = {
  slug: 'partners',
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
    read: anyone,
    update: admins,
    create: admins,
    delete: admins,
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Partner Name',
      required: true,
    },
    partner,
    {
      name: 'publishedDate',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    slugField(),
  ],
}
