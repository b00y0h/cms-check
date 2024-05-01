import type { Field, SelectField } from 'payload/types'

import deepMerge from '../utilities/deepMerge'

interface Args {
  overrides?: Partial<SelectField>
}

export const colorSchema = ({ overrides = {} }: Args): Field =>
  deepMerge(
    {
      name: 'colorSchema',
      type: 'select',
      defaultValue: 'blackwhite',
      options: [
        {
          label: 'Black & White',
          value: 'blackwhite',
        }
      ],
    },
    overrides,
  )
