import type { LinksFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import styles from "./tailwind.css";

export const links: LinksFunction = () => [
	{ rel: "stylesheet", href: styles },
	{
		rel: "preload",
		href: "/fonts/Nelphim/web/Nelphim.woff2",
		as: "font",
		type: "font/woff2",
		crossOrigin: "anonymous",
	},
	{
		rel: "preload",
		href: "/fonts/Nelphim/web/Nelphim-Italic.woff2",
		as: "font",
		type: "font/woff2",
		crossOrigin: "anonymous",
	},
	{
		rel: "preload",
		href: "/fonts/UncutSans/web/UncutSans-Variable.woff2",
		as: "font",
		type: "font/woff2",
		crossOrigin: "anonymous",
	},
	{ rel: "stylesheet", href: "/fonts/Nelphim/style.css", as: "style" },
	{ rel: "stylesheet", href: "/fonts/UncutSans/style.css", as: "style" },
];

export default function App() {
	return (
		<html lang="en-US">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="antialiased">
				<main className="flex flex-col">
					<Outlet />
					<ScrollRestoration />
					<Scripts />
					<LiveReload />
				</main>
			</body>
		</html>
	);
}
