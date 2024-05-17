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
import { Tabsection } from '../../blocks/TabSection'
import { InnerPageNav } from '../../blocks/InnerpageNavSection'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      // Define the live preview URL for pages based on their slug
      url: ({         data
 }) => {
        const baseUrl = process.env.PAYLOAD_PUBLIC_SITE_URL || '';
        let slug ='';       
        if (data?.breadcrumbs) {
          const { url: lastCrumbURL = '' } = data?.breadcrumbs?.[data?.breadcrumbs.length - 1] || {} // last crumb
          slug = lastCrumbURL
        } else {
          slug = data?.slug
        }
        return `${baseUrl}${slug}`;
      },
    },
  },
  hooks: {
    beforeChange: [populatePublishedDate],
    // afterRead: [populateArchiveBlock],
    afterChange: [revalidatePage],
  },
  versions : {
    drafts: true
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
              blocks: [CallToAction, Section, FormBlock, MediaBlock, Archive, Statistics, Testimonial, CalloutSection, HighlightCTA, CarouselSection, Tabsection, InnerPageNav],
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
