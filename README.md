# Before.tmp

> [!CAUTION]
> 🚧 This project is currently under construction. Docs need to be finished, batteries added, and a few other enterprise-ready conveniences need to still be plugged in. 🚧

<sup>Quick Links: [Getting Started](#getting-started), [Opinionated Choices](#opinionated-choices), [Framework Alternatives](#framework-alternatives)</sup>

**Before.tmp** is an opinionated Next.js open-source starter template with the following principles in mind:

- **🗜️ Minimal**: The only installed dependencies are the ones actually used. No extra bloat. You can build from here.

- **💎 Production Ready**: Project configuration and dependencies have been chosen for their ubiquitous use across the development community. Sensible defaults should be chosen to ensure production builds remain perfomant. Safeguards are in place to ensure code quality and testing standards are met before production.

- **💻 Developer Friendly**: Easy to poke around and customize settings as necessary, easy package upgrades. IDE formatting should work as expected. No configuartion rot. Dependency choices have a large online community, ensuring you can find help and resources easily.

## Getting Started

Simply clone this repository and install the dependencies with your preferred package manager:

```shell
# Clone the repository
git clone https://github.com/austin-raey/before.tmp
cd ./before.tmp
rm -rf ./.git
rm ./README.md
git init

# Install dependencies with your preferred package manager
npm install
pnpm install
yarn install
bun install
```

## Opinionated Choices

Before.tmp has a few configuration and package choices I would encourage you to consider/keep. If there is anything you do not like, it should be straightforward to remove or re-configure with minimal effort.

(TBD: More details on these choices will be added to the GitHub Wiki and/or documentation site)

In no particular order (and by no means exhaustive), here are some of those made for this template:

- **[Tailwind](https://tailwindcss.com/)**: An excellent utility-first CSS framework that outputs minimal CSS. Easy to scaffold out a design quickly and add more advanced styles as needed.

- **[ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)** _(formatting, code quality)_: A powerful combination to ensure consistent code quality and formatting between developers. To call out a few notable plugins:

  - [`eslint-plugin-perfectionist`](https://perfectionist.dev/) _(sorting, formatting)_: Ensures predictable ordering of properties, imports, etc.
  - [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn) _(formatting, code quality)_: Enforces some useful practices and coding standards.
  - Also included are some 1<sup>st</sup> party ESLint rules I would consider essential for any Next.js project. These typically enforce best practices, code quality, and formatting.

    [`@eslint/js`](https://eslint.org/), [`typescript-eslint`](https://typescript-eslint.io/), [`eslint-plugin-react-compiler`](https://react.dev/learn/react-compiler), [`eslint-config-next`](https://nextjs.org/docs/app/api-reference/config/eslint), [`@next/eslint-plugin-next`](https://nextjs.org/docs/app/api-reference/config/eslint)

- **Package Versioning**: `.npmrc` has been configured with `save-exact=true`. This ensures consistent package versions for developers and deployment. Even minor version bumps can introduce breaking changes sometimes, so this is included to keep surprises to a minimum.

## Framework Alternatives

With any framework, there are configuration hurdles that aren't always well-documented &mdash; including Next.js. Even eslint configuration is not well-documented for Next.js and you will find many conflicting examples (or lack thereof) on official sources for many different aspects.

Also, it is quite overwhelming to even choose a framework to begin with. There are so many options out there.

That in mind, I still believe any "popular" framework out there is a good choice for a production-ready application, because there is more community discussion and resources available.

The simpler and more transparent the better.

Here are a few alternatives I would consider for a production-ready application, in no particular order, to get your wheels turning:

### Similar Next.js-based Templates

- [**Next.js's own `create-next-app`**](https://nextjs.org/docs/app/api-reference/cli/create-next-app): (Does not include a lot of configuration, but a good starting point)

- [**T3 Create**](https://create.t3.gg/) Excellent Next.js starter template with a lot of different configuration options.

- [**Cloudflare's Next.js Starter**](https://developers.cloudflare.com/pages/framework-guides/nextjs/ssr/): When hosting on Cloudflare, this is a good starting point. Next.js has a Vercel bias and often other hosting providers have their own special conifugration that is necessary.

### Full-Stack Framework Alternatives

- [**Astro**](https://astro.build/): Astro + Bring your own UI framework

- [**Remix**](https://remix.run/): React

- [**Nuxt**](https://nuxtjs.org/): Vue

- [**SvelteKit**](https://kit.svelte.dev/): Svelte

- [**TanStack Start**](https://start.tanstack.com/): React, Solid, at time of writing

- [**React + Vite (SSR)**](https://vite.dev/guide/ssr.html#example-projects): React, very guts out, could be any UI framework

- [**Vinxi**](https://vinxi.vercel.app/): Plugins for React, Solid, at time of writing. Built on top of Vite, Nitro

- [**Nitro**](https://nitro.build/): Tools to deploy a server-side application just about anywhere.
