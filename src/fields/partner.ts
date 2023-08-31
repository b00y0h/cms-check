import type { Field } from 'payload/types'

import { address } from './address'
import linkGroup from './linkGroup'

export const partner: Field = {
  type: 'row',
  fields: [
    {
      name: 'shortName',
      type: 'text',
      label: 'Short Name',
      required: true,
      admin: {
        placeholder:
          'We do not always refer to the full name of the university when talking about it. (i.e. Morgan State, instead of Morgan State University)',
      },
    },
    {
      name: 'acroynm',
      type: 'text',
      label: 'Acroynm',
      required: true,
      admin: {
        placeholder: 'The acroynm of the university. (i.e. MSU)',
      },
    },
    {
      name: 'foundingDate',
      type: 'date',
      label: 'Founding Date',
    },
    address,
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        width: '100%',
      },
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone',
      admin: {
        width: '50%',
      },
    },
    {
      name: 'email',
      type: 'text',
      label: 'Email',
      admin: {
        width: '50%',
      },
    },
    linkGroup({
      appearances: false,
      overrides: {
        maxRows: 1,
      },
    }),
  ],
}
