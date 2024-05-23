import type { Block } from "payload/types";
import linkGroup from "../../fields/linkGroup";

export const ComparisonBlock: Block = {
	slug: "comparison",
	fields: [
		{
			name: "title",
			label: "Title",
			type: "text",
		},
		{
			name: "icon",
			label: "Light Mode Icon",
			type: "upload",
			relationTo: "media",
			required: true,
		},
		{
			name: "darkicon",
			label: "Dark Mode Icon",
			type: "upload",
			relationTo: "media",
		},
		{ name: "richText", label: "Description", type: "richText" },
		linkGroup({
			appearances: ["primary", "secondary", "tertiary", "default"],
		}),
	],
};
