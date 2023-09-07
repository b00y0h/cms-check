import type { BeforeChangeHook } from 'payload/dist/collections/config/types'
import payload from 'payload'

export const populatePartnerState: BeforeChangeHook = async ({ data, operation }) => {
  if (operation === 'create' || operation === 'update') {
    const partners = await payload.find({
      collection: 'partners',
      where: {
        id: {
          equals: data.partner,
        },
      },
    })

    if (partners?.docs) {
      return {
        ...data,
        partnerState: partners.docs?.[0].contact.state,
      }
    }
  }

  return data
}
