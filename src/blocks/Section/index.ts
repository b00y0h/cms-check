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
				label: "Blocks Alignment",
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
			{
				name: "extendToBorders",
				type: "checkbox",
				label: "Extend to borders",
				defaultValue: false,
				admin: {
					description:
						"Enable this to extend the column to the borders of the section.",
					style: {
						display: "flex ",
						flexDirection: "column-reverse",
					},
				},
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
							label: "Rows",
						},
						{
							value: "column",
							label: "Columns",
						},
					],
				},
				{
					name: "layoutWidth",
					type: "select",
					label: "Layout Width",
					defaultValue: "contained",
					options: [
						{
							value: "full",
							label: "Full Width",
						},
						{
							value: "contained",
							label: "Contained",
						},
						{
							value: "narrow",
							label: "Narrow",
						},
					],
				},
			],
		},
		{
			type: "row",
			fields: [
				backgroundColor({}),
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
