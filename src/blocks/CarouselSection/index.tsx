
import type { Block } from 'payload/types'
import richText from '../../fields/richText'
import { backgroundColor } from '../../fields/backgroundColor'

export const CarouselSection: Block = {
  slug: 'Schoolcarousel',
  fields: [
  backgroundColor({}),
  {
    name: 'title',
    label: 'Title',
    type: 'text'
  },
  richText({
    required: false
  }),
  // {
  //   name: 'carouselCards',
  //   label: 'Carousel Cards',
  //   type: 'relationship',
  //   relationTo: 'carousel-cards',
  //   hasMany: true, // Allow selecting multiple carousel cards
  // },
  ],
}
