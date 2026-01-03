"use client";

// !! TODO: Replace this page with your own content.
import Link from "next/link";

// export default function Page(props: Partial<PageProps<"/">>) {
export default function Page() {
	return (
		<div className="bg-linear-to-br from-black to-neutral-900 to-75% text-neutral-400">
			{/* whiteprint grid background */}
			{/* SVG filters for squiggly effect */}
			<svg className="hidden" style={{ filter: "url(#squiggly)" }}>
				<defs>
					<filter id="squiggly">
						<feTurbulence baseFrequency="0.33" result="noise" />
						<feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G" />
					</filter>
				</defs>
			</svg>

			{/* Squiggly grid background */}
			<div className="relative z-10 mx-auto min-h-svh max-w-2xl space-y-4 overflow-hidden px-6 py-20">
				<header className="space-y-2">
					<h1 className="font-serif text-6xl tracking-tighter sm:text-8xl">
						<span className="font-black text-white">Before</span>
						<span className="font-extralight text-neutral-400">
							.
							<span className="underline decoration-wavy decoration-2 underline-offset-8 sm:decoration-[0.25rem]">
								tmp
							</span>
						</span>
					</h1>
					<p className="text-xl">
						A <span className="font-semibold text-white">Next.JS</span> starter template with a focus on performance,
						developer experience, and minimalism.
					</p>
				</header>

				<nav className="flex flex-col gap-3 sm:flex-row">
					<Link
						className="text-sm decoration-wavy underline-offset-4 hover:text-white hover:underline"
						href="https://www.github.com/austin-raey/before.tmp"
						target="_blank"
					>
						Download
						<i className="icon-[lucide--arrow-up-right] size-4 align-middle" />
					</Link>
					<details className="group text-sm">
						<summary className="cursor-pointer hover:text-white [&::marker]:content-none">
							CLI <i className="icon-[lucide--chevron-down] size-4 align-middle group-open:icon-[lucide--chevron-up]" />
						</summary>
						<div className="text-white">Coming Soon!</div>
						<div className="flex flex-col gap-2">
							{[{ tool: "npm" }, { tool: "pnpm" }, { tool: "bun" }].map(({ tool }) => (
								<button
									className="inline-block cursor-pointer text-left hover:text-white"
									key={tool}
									onClick={() => {
										navigator.clipboard.writeText(`${tool} create tbd@latest my-next-app`);
									}}
								>
									<i className="mr-1 icon-[lucide--copy] align-text-bottom" />
									<code>
										<span className="font-semibold">{tool}</span> create tbd@latest my-next-app
									</code>
								</button>
							))}
						</div>
					</details>
				</nav>

				{/* Feature Grid */}
				<section className="-mx-4 grid gap-4 sm:grid-cols-2">
					{[
						{
							description: "Optimized for speed with Bun runtime and minimal dependencies.",
							icon: "icon-[lucide--feather]",
							title: "Performance",
						},
						{
							description: "Includes ESLint, Prettier, and VSCode settings for a smooth development workflow.",
							icon: "icon-[lucide--keyboard]",
							title: "Developer Experience",
						},
						{
							description: "Opinionated project structure to help you get started quickly and stay organized.",
							icon: "icon-[lucide--layout]",
							title: "Structure",
						},
						{
							description: "Hand-picked and familiar packages to ensure easy integration and maintainability.",
							icon: "icon-[lucide--check-circle]",
							title: "Best Practices",
						},
					].map((feature) => (
						<div
							className="relative overflow-hidden rounded bg-linear-to-tr from-white/3 to-white/1 p-4 bg-blend-saturation"
							key={feature.icon}
						>
							<i className={`${feature.icon} absolute inset-y-2 right-0 m-3 size-[8ch] opacity-10`} />
							<h2 className="font-serif text-2xl font-semibold text-neutral-200">{feature.title}</h2>
							<p>{feature.description}</p>
						</div>
					))}
				</section>
			</div>
		</div>
	);
}
