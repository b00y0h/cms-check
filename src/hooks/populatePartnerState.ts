import type { AfterChangeHook } from 'payload/dist/collections/config/types'

export const populatePartnerState: AfterChangeHook = ({ doc, req, operation }) => {
  console.log('🚀 ~ file: populatePartnerState.ts:4 ~ doc, req, operation:', doc)
  if (operation === 'create' || operation === 'update') {
    if (req.body) {
      console.log('🚀🚀🚀🚀🚀 ~ file: populatePartnerState.ts:7 ~ req.body:', req.body)
      const state = new Date()
      return {
        ...doc,
        partnerState: state,
      }
    }
  }

  return doc
}
