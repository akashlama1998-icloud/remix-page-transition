import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		fontFamily: {
			serif: ["Nelphim", ...defaultTheme.fontFamily.serif],
			sans: [
				['"Uncut Sans"', ...defaultTheme.fontFamily.sans],
				{ fontFeatureSettings: '"case", "ss02", "ss05", "ss06", "ss07", "ss08"' },
			],
		},
		extend: {
			colors: {
				body: "rgb(249 249 249)",
			},
		},
	},
	plugins: [],
} satisfies Config;
