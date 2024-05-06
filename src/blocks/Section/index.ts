import type { Block, Field } from "payload/types";

import { backgroundColor } from "../../fields/backgroundColor";
import link from "../../fields/link";
import { colorSchema } from "../../fields/colorSchema";
import { SingleStatBlock } from "../../singleBlocks/StatisticsBlock";
import { TestimonialBlock } from "../../singleBlocks/TestimonialBlock";
import { CareerBlock } from "../../singleBlocks/CareerBlock";
import { ComparisonBlock } from "../../singleBlocks/ComparisonBlock";
import { AccordionBlock } from "../../singleBlocks/AccordionBlock";
import { RichTextBlock } from "../../singleBlocks/RichTextBlock";
import { MediaBlock } from "../Media";
import { ButtonGroupBlock } from "../../singleBlocks/ButtonGroupBlock";

const columnFields: Field[] = [
	{
		type: "row",
		fields: [
			{
				name: "size",
				type: "text",
				label: "Column Size (%)",
				required: true,
				validate: async (val) => {
					const regex = /^(\d+(\.\d+)?%?)$/;
					const checkedVal = regex.test(val);
					if (!checkedVal) {
						return "Please enter a valid column size (e.g., 50%, 100, 25.5%)";
					}
					return checkedVal; // Return an empty string if validation passes
				},
			},
			{
				name: "alignment",
				type: "select",
				label: "Content Alignment",
				defaultValue: "left",
				options: [
					{
						label: "Left",
						value: "left",
					},
					{
						label: "Center",
						value: "center",
					},
					{
						label: "Right",
						value: "right",
					},
				],
			},
		],
	},

	{
		name: "blocks",
		type: "blocks",
		label: "Add Block",
		required: true,
		blocks: [
			SingleStatBlock,
			TestimonialBlock,
			CareerBlock,
			ComparisonBlock,
			AccordionBlock,
			RichTextBlock,
			MediaBlock,
			ButtonGroupBlock,
		],
	},
];

export const Section: Block = {
	slug: "section",
	fields: [
		{
			type: "row",
			fields: [
				{
					name: "type",
					type: "select",
					label: "Layout type",
					defaultValue: "column",
					options: [
						{
							value: "row",
							label: "Row",
						},
						{
							value: "column",
							label: "Column",
						},
					],
					admin: {
						width: "40%",
					},
				},
				backgroundColor({ overrides: { admin: { width: "35%" } } }),
				{
					name: "enableHighlight", // required
					type: "checkbox", // required
					label: "Highlight Section",
					defaultValue: false,
					admin: {
						style: {
							display: "flex",
							flexDirection: "column-reverse",
						},
						width: "25%",
						description:
							"Enable this to highlight the section with a decorative shape.",
					},
				},
			],
		},
		{
			name: "rows",
			type: "array",
			fields: [
				{
					name: "columns",
					type: "array",
					fields: columnFields,
				},
			],
			admin: {
				condition: (_, { type } = {}) => ["row"].includes(type),
			},
		},
		{
			name: "columns",
			type: "array",
			fields: columnFields,
			admin: {
				condition: (_, { type } = {}) => ["column"].includes(type),
			},
		},
	],
};
