
import type { Block, Field } from 'payload/types'
import linkGroup from '../../fields/linkGroup'
import { backgroundColor } from '../../fields/backgroundColor'

export const navigationField: Field[] = [

    {
        name: 'title',
        label: 'Title',
        type: 'text',
        required: true
    },
    {
        name: 'url',
        label: 'URL',
        type: 'text',
    }
]
export const InnerPageNav: Block = {
    slug: 'innerPageNavigation',
    fields: [
        backgroundColor({ overrides: { name: 'innerpageNavBackgroundColor' } }),
        {
            name: 'innerPageNavigation',
            type: 'array',
            fields: navigationField
        }
    ],
}
