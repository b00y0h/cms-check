
import type { Block } from 'payload/types'
import { backgroundColor } from '../../fields/backgroundColor'

export const CarouselSection: Block = {
  slug: 'Schoolcarousel',
  fields: [
  backgroundColor({ overrides: { name: 'carouselBackgroundColor' } }),
  {
    name: 'title',
    label: 'Title',
    type: 'text'
  },
  {
    name: 'richText',
    label: 'Description',
    type: 'richText',
    required: false
  },
  // {
  //   name: 'carouselCards',
  //   label: 'Carousel Cards',
  //   type: 'relationship',
  //   relationTo: 'carousel-cards',
  //   hasMany: true, // Allow selecting multiple carousel cards
  // },
  ],
}
