# Next.js Scaffold

This repository contains a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

I have also added my preferred technologies and utilities.

* [ESLint](https://eslint.org/)
* [Prettier](https://prettier.io/)
* [Stylelint](https://stylelint.io/)
* [Tailwind CSS](https://tailwindcss.com/)

Note that I am using [Yarn](https://yarnpkg.com/) for Node package management.

## Getting Started

To get started with local development, first install the Node.js dependencies:

```shell
yarn
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view your application.

## Learn More

### Documentation

- [Next.js](https://nextjs.org/docs)
- [ESLint](https://eslint.org/docs/latest/user-guide)
- [Headless UI](https://headlessui.dev) — not yet installed
- [Prettier](https://prettier.io/docs/en/)
- [Stylelint](https://stylelint.io/user-guide)
- [Storybook](https://storybook.js.org/docs/react/get-started/introduction) — net yet installed
- [Tailwind CSS](https://tailwindcss.com/docs)

### Tutorials

- [Learn Next.js](https://nextjs.org/learn) — an interactive Next.js tutorial

## Setup Script

Here is an inventory of the commands that will get a repository into a state that matches this one.

```shell
# Install Next.js
npx create-next-app@latest .

# Install Prettier
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier

# Install Stylelint
yarn add -D stylelint stylelint-config-standard stylelint-config-prettier

# Install Tailwind CSS - https://tailwindcss.com/docs/guides/nextjs
yarn add -D tailwindcss postcss autoprefixer prettier-plugin-tailwindcss @tailwindcss/aspect-ratio @tailwindcss/forms @tailwindcss/line-clamp @tailwindcss/typography

# Configure Tailwind CSS
npx tailwindcss init -p

# Remove CSS from the default Next.js scaffolding
rm styles/Home.module.css

# Configure EditorConfig
# - https://editorconfig.org/

# Configure ESLint
# - https://nextjs.org/docs/basic-features/eslint

# Configure Prettier
# - https://prettier.io/docs/en/configuration.html
# - https://github.com/tailwindlabs/prettier-plugin-tailwindcss#installation

# Configure Stylelint
# - https://stylelint.io/user-guide/configure


```
