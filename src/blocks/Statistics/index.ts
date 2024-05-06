//stat data number, title, richtext editor

import type { Block, Field } from "payload/types";

import { backgroundColor } from "../../fields/backgroundColor";

export const statFields: Field[] = [
	{
		type: "row",
		fields: [
			{
				name: "number",
				label: "Number",
				type: "text",
				required: true,
			},
			{
				name: "title",
				label: "Title",
				type: "text",
			},
		],
	},
	{ name: "richText", label: "Description", type: "richText" },
];

export const Statistics: Block = {
	slug: "statistics",
	fields: [
		backgroundColor({}),
		{
			name: "statistics",
			type: "array",
			fields: statFields,
			maxRows: 8,
		},
		{
			name: "source",
			type: "text",
			label: "Source",
		},
	],
};
