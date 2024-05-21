import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
import { adminsOrPublished } from '../../access/adminsOrPublished'
import { Archive } from '../../blocks/Archive'
import { CalloutSection } from '../../blocks/CalloutSection'
import { CallToAction } from '../../blocks/CallToAction'
import { CarouselSection } from '../../blocks/CarouselSection'
import { FormBlock } from '../../blocks/Form'
import { HighlightCTA } from '../../blocks/HighlightCTASection'
import { InnerPageNav } from '../../blocks/InnerpageNavSection'
import { MediaBlock } from '../../blocks/Media'
import { Section } from '../../blocks/Section'
import { Statistics } from '../../blocks/Statistics'
import { Tabsection } from '../../blocks/TabSection'
import { Testimonial } from '../../blocks/Testimonial'
import { hero } from '../../fields/hero'
import { slugField } from '../../fields/slug'
import { populatePublishedDate } from '../../hooks/populatePublishedDate'
import { revalidatePage } from '../../hooks/revalidatePage'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'fullPath', 'updatedAt'],
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
      name: 'fullPath',
      type: 'text',
      admin: {
        hidden: true,
      },
      hooks: {
        beforeChange: [
          ({ siblingData }) => {
            // Mutate the sibling data to prevent DB storage
            delete siblingData.fullPath
          },
        ],
        afterRead: [
          async ({ data }) => {
            return data.breadcrumbs.slice(-1)[0]?.url || `/${data.slug || ''}`
          },
        ],
      },
    },
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
              blocks: [
                CallToAction,
                Section,
                FormBlock,
                MediaBlock,
                Archive,
                Statistics,
                Testimonial,
                CalloutSection,
                HighlightCTA,
                CarouselSection,
                Tabsection,
                InnerPageNav,
              ],
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
