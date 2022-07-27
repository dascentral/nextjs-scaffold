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

### EditorConfig

**Documentation:** [https://editorconfig.org](https://editorconfig.org)

EditorConfig helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs. The EditorConfig wiki provides examples of [projects that use EditorConfig files](https://github.com/editorconfig/editorconfig/wiki/Projects-Using-EditorConfig).

Feel free to copy my preferred config into your project:

```shell
curl https://raw.githubusercontent.com/dascentral/nextjs-scaffold/main/.editorconfig -o .editorconfig && chmod 644 .editorconfig
```

### ESLint

**Documentation:** [https://eslint.org/docs/latest/user-guide/configuring/](https://eslint.org/docs/latest/user-guide/configuring/)

The ESLint configuration file within this repository expands upon the default version included in a new Next.js application and includes several preferred customizations.

Feel free to copy my preferred config into your project:

```shell
curl https://raw.githubusercontent.com/dascentral/nextjs-scaffold/main/.eslintrc.js -o .eslintrc.js
```

### Prettier

**Documentation:** [https://prettier.io/docs/en/configuration.html](https://prettier.io/docs/en/configuration.html)

Feel free to copy my preferred config into your project:

```shell
curl https://raw.githubusercontent.com/dascentral/nextjs-scaffold/main/.prettierrc.json -o .prettierrc.json && chmod 644 .prettierrc.json
```

### Storybook

#### Integrating Tailwind CSS

To use Tailwind CSS within Storybook, you must install and configure the `@storybook/addon-postcss` addon. Reference: [https://storybook.js.org/addons/@storybook/addon-postcss](https://storybook.js.org/addons/@storybook/addon-postcss).

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

```javascript
module.exports = {
  stories: [
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
};
```

### Stylelint

**Documentation:** [https://stylelint.io/user-guide/configure](https://stylelint.io/user-guide/configure)

Feel free to copy my preferred config into your project:

```shell
curl https://raw.githubusercontent.com/dascentral/nextjs-scaffold/main/.editorconfig -o .stylelintrc.json && chmod 644 .stylelintrc.json
```

### Tailwind CSS

I have configured Tailwind CSS to account for the addition of code within the `pages/` and `components/` folder. I have also enabled all available plugins.

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};
```

