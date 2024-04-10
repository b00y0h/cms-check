import type { CollectionConfig } from 'payload/types'
import { admins } from '../../access/admins'
import { adminsOrPublished } from '../../access/adminsOrPublished'
import { Archive } from '../../blocks/Archive'
import { CallToAction } from '../../blocks/CallToAction'
import { Section } from '../../blocks/Section'
import { FormBlock } from '../../blocks/Form'
import { MediaBlock } from '../../blocks/Media'
import { hero } from '../../fields/hero'
import { slugField } from '../../fields/slug'
import { populateArchiveBlock } from '../../hooks/populateArchiveBlock'
import { populatePublishedDate } from '../../hooks/populatePublishedDate'
import { formatAppURL, revalidatePage } from '../../hooks/revalidatePage'
import { Statistics } from '../../blocks/Statistics'
import { Testimonial } from '../../blocks/Testimonial'
import { CalloutSection } from '../../blocks/CalloutSection'
import { HighlightCTA } from '../../blocks/HighlightCTASection'
import { CarouselSection } from '../../blocks/CarouselSection'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    preview: doc =>
      `${process.env.PAYLOAD_PUBLIC_SITE_URL}/api/preview?url=${formatAppURL({ doc })}`,
  },
  hooks: {
    beforeChange: [populatePublishedDate],
    afterRead: [populateArchiveBlock],
    afterChange: [revalidatePage],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: adminsOrPublished,
    update: admins,
    create: admins,
    delete: admins,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'publishedDate',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [hero],
        },
        {
          label: 'Content',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              required: true,
              blocks: [CallToAction, Section, FormBlock, MediaBlock, Archive, Statistics, Testimonial, CalloutSection, HighlightCTA, CarouselSection],
              // validate: async (value) => {
              //   const carouselSectionBlocks = value.filter(block => block.blockType === 'CarouselSection');
              //   const isValid = carouselSectionBlocks.length > 1 ;
              //   if(isValid) {
              //   return 'Only one Carousel Section is allowed'
              //   }
              // },
            },
          ],
        },
      ],
    },
    slugField(),
  ],
}
