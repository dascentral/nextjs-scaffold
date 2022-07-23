# Next.js Scaffold

This repository contains a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

I have also added my preferred technologies and utilities.

* [ESLint](https://eslint.org/)
* [Prettier](https://prettier.io/)
* [Storybook](https://storybook.js.org/)
* [Stylelint](https://stylelint.io/)
* [Tailwind CSS](https://tailwindcss.com/)

Note that I am using [Yarn](https://yarnpkg.com/) for Node package management.

## Getting Started

To get started with local development, first install the Node.js dependencies and then boot up the development server:

```shell
# install Node.js dependencies
yarn

# start development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view your application.

## Learn More

### Documentation

- [ESLint](https://eslint.org/docs/latest/user-guide)
- [Headless UI](https://headlessui.dev) — not yet installed
- [Next.js](https://nextjs.org/docs)
- [Prettier](https://prettier.io/docs/en/)
- [Storybook](https://storybook.js.org/docs/react/get-started/introduction)
- [Stylelint](https://stylelint.io/user-guide)
- [Tailwind CSS](https://tailwindcss.com/docs)

### Tutorials

- [Learn Next.js](https://nextjs.org/learn) — an interactive Next.js tutorial

## Setup Script

Here is an inventory of the commands that will get a repository into a state that matches this one.

```shell
# Install Next.js
npx create-next-app@latest .

# Install Prettier
yarn add -D prettier eslint-config-prettier

# Install ESLint plugins
yarn add -D eslint-plugin-react eslint-plugin-prettier

# Install Stylelint
yarn add -D stylelint stylelint-config-standard stylelint-config-prettier

# Install Tailwind CSS - https://tailwindcss.com/docs/guides/nextjs
yarn add -D tailwindcss postcss autoprefixer prettier-plugin-tailwindcss @tailwindcss/aspect-ratio @tailwindcss/forms @tailwindcss/line-clamp @tailwindcss/typography

# Configure Tailwind CSS
npx tailwindcss init -p

# Remove CSS from the default Next.js scaffolding
rm styles/Home.module.css

# Install Storybook
npx storybook init
yarn add -D @storybook/addon-a11y
yarn add -D @storybook/addon-postcss
```

## Configuration

Many of the tools installed above require additional configuration. Relevant docs:

* [EditorConfig](https://editorconfig.org)
* [ESLint](https://nextjs.org/docs/basic-features/eslint)
* [Prettier](https://prettier.io/docs/en/configuration.html)
* [Stylelint](https://stylelint.io/user-guide/configure)

You are welcome to download the sample configuration files within this repository and customize further.

```shell
# EditorConfig
curl https://raw.githubusercontent.com/dascentral/nextjs-scaffold/main/.editorconfig -o .editorconfig && chmod 644 .editorconfig

# ESLint
curl https://raw.githubusercontent.com/dascentral/nextjs-scaffold/main/.eslintrc.json -o .eslintrc.json && chmod 644 .eslintrc.json

# Prettier
curl https://raw.githubusercontent.com/dascentral/nextjs-scaffold/main/.prettierrc.json -o .prettierrc.json && chmod 644 .prettierrc.json

# Stylelint
curl https://raw.githubusercontent.com/dascentral/nextjs-scaffold/main/.editorconfig -o .stylelintrc.json && chmod 644 .stylelintrc.json
```

### Storybook

#### Integrating Tailwind CSS

To use Tailwind CSS within Storybook, you must install and configure the `@storybook/addon-postcss` addon.

**Reference:** [https://storybook.js.org/addons/@storybook/addon-postcss](https://storybook.js.org/addons/@storybook/addon-postcss)

The "addons" section of your `.storybook/main.js` will look something like this:

```javascript
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],

```

After configuring PostCSS, import the Tailwind styles within your `.storybook/preview.js` file.

```javascript
import '../styles/globals.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
```

#### Components folder

When using Storybook, I prefer to keep stories listed alongisde their component counterpart. As a result, the Storybook configuration within this repository looks for stories within `/components` as opposed to `/stories `.
