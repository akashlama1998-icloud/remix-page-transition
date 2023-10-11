import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
	return [
		{ title: "Create Remix App" },
		{ name: "description", content: "Generated by create remix app." },
	];
};

export default function Index() {
	return (
		<article className="flex min-h-screen flex-col">
			<section className="flex flex-grow flex-col gap-0.5 px-4 py-5">
				<h1 className="font-serif text-4xl text-neutral-900">Welcome to Remix</h1>
				<p className="pl-1 text-base tracking-tight text-neutral-600">
					Visit{" "}
					<a
						href="https://remix.run"
						className="text-blue-600 outline-none hover:underline focus-visible:underline"
					>
						remix.run
					</a>{" "}
					to read the documentation.
				</p>
			</section>
		</article>
	);
}