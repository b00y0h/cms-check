import payload from 'payload'
import type { FieldHook } from 'payload/types'

export const getLocationPartner: FieldHook = async ({ data, operation, siblingData }) => {
  if (operation === 'read') {
    const partners = await payload.find({
      collection: 'partners',
      where: {
        id: {
          equals: data.partner,
        },
      },
    })

    if (partners?.docs) {
      return partners.docs?.[0].contact.state
    }
  }
  return null
}
