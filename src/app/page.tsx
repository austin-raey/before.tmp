// !! TODO: Replace this page with your own content.

import Link from "next/link";

// export default function Page(props: Partial<PageProps<"/">>) {
export default function Page() {
	return (
		<div className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-400">
			{/* Blueprint grid background */}
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
			<div
				className="pointer-events-none absolute inset-0 z-0 opacity-20"
				style={{
					backgroundImage: `
						linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
						linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
						linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
						linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
					`,
					backgroundSize: "200px 200px, 200px 200px, 25px 25px, 25px 25px",
					filter: "url(#squiggly)",
				}}
			></div>
			<div className="relative z-10 mx-auto min-h-svh max-w-2xl space-y-4 overflow-hidden px-6 py-20">
				<header className="space-y-2">
					<h1 className="font-serif text-8xl tracking-tighter">
						<span className="font-black text-blue-400">Before</span>
						<span className="font-extralight text-slate-300">
							.<span className="underline decoration-wavy decoration-[0.25rem] underline-offset-8">tmp</span>
						</span>
					</h1>
					<p className="text-xl">
						A Next.JS starter template with a focus on performance, developer experience, and minimalism.
					</p>
				</header>

				{/* Feature Grid */}
				<section>
					<div className="-mx-4 grid gap-4 md:grid-cols-2">
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
								className="relative space-y-2 rounded-md bg-linear-to-tr from-white/5 to-white/1 p-4 bg-blend-saturation"
								key={feature.icon}
							>
								<i className={`absolute top-0 right-0 m-3 ${feature.icon} size-5 text-blue-400`} />
								<h2 className="text-2xl font-semibold text-blue-400">{feature.title}</h2>
								<p>{feature.description}</p>
							</div>
						))}
					</div>
				</section>

				<footer className="pt-4">
					<Link
						className="text-blue-400 decoration-wavy underline-offset-4 hover:text-blue-500 hover:underline"
						href="https://www.github.com/austin-raey/before.tmp"
						target="_blank"
					>
						Download
						<i className="mr-2 icon-[lucide--arrow-up-right] inline-block size-5 align-text-bottom" />
					</Link>
				</footer>
			</div>
		</div>
	);
}
