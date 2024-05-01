import type { Field, SelectField } from 'payload/types'

import deepMerge from '../utilities/deepMerge'

interface Args {
  overrides?: Partial<SelectField>
}

export const backgroundColor = ({ overrides = {} }: Args): Field =>
  deepMerge(
    {
      name: 'backgroundColor',
      type: 'select',
      defaultValue: 'default',
      options: [
        {
          label: 'Default',
          value: 'default',
        },
        {
          label: 'Dark Blue / Light Gray',
          value: 'dark_blue_light_gray',
        },
        {
          label: 'Orange / Peach',
          value: 'orange_peach',
        },
        {
          label: 'Turquoise / Yellow',
          value: 'turquoise_yellow',
        },
        {
          label: 'Turquoise / Light Turquoise',
          value: 'turquoise_light_turquoise',
        },
        {
          label: 'Slate Gray / White',
          value: 'slate_gray_white',
        }
      ],
    },
    overrides,
  )