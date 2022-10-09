# Next.js Scaffold

## Introduction

This repository contains a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). I have also added and configured the following technologies and utilities:

- [ESLint](https://eslint.org/docs/latest/user-guide)
- [HeadlessUI](https://headlessui.com/)
- [Next.js](https://nextjs.org/docs)
- [Prettier](https://prettier.io/docs/en/)
- [Storybook](https://storybook.js.org/docs/react/get-started/introduction)
- [Stylelint](https://stylelint.io/user-guide)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Yarn](https://yarnpkg.com/)

### Tutorials

- [Learn Next.js](https://nextjs.org/learn) — an interactive Next.js tutorial

## Getting Started

To get started with local development, first install the Node.js dependencies and then boot up the development server:

```bash
# install Node.js dependencies
yarn

# start development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view your application.

## Configuration

### EditorConfig

**Documentation:** [https://editorconfig.org](https://editorconfig.org)

EditorConfig helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs. The EditorConfig wiki provides examples of [projects that use EditorConfig files](https://github.com/editorconfig/editorconfig/wiki/Projects-Using-EditorConfig).

```bash
# copy my preferred config into your project
curl https://raw.githubusercontent.com/dascentral/nextjs-scaffold/main/.editorconfig -o .editorconfig && chmod 644 .editorconfig
```

### ESLint

**Documentation:** [https://eslint.org/docs/latest/user-guide/configuring/](https://eslint.org/docs/latest/user-guide/configuring/)

The ESLint configuration file within this repository expands upon the default version included in a new Next.js application and includes several preferred customizations.

```bash
# copy my preferred config into your project
curl https://raw.githubusercontent.com/dascentral/nextjs-scaffold/main/.eslintrc.js -o .eslintrc.js && chmod 644 .eslintrc.js
```

### Prettier

**Documentation:** [https://prettier.io/docs/en/configuration.html](https://prettier.io/docs/en/configuration.html)

```bash
# copy my preferred config into your project
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
import '../src/styles/globals.css';

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

Lastly, as of this writing, the latest PostCSS addon for Storybook is `^3.0.0-alpha.1` which does not appear to work correctly. I have installed the 2.0.0 version within this repository.

```shell
yarn add -D @storybook/addon-postcss@2.0.0
```

#### Components folder

When using Storybook, I prefer to keep stories listed alongisde their component counterpart. As a result, the Storybook configuration within this repository looks for stories within `/components` as opposed to `/stories `.

```javascript
module.exports = {
  stories: [
    '../src/components/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
};
```

#### Absolute imports

Within many codebases, developers will use `jsconfig.json` to specify an aboslute path alias to simplify imports. Storybook does not honor the paths defined within `jsconfig.json` out-of-the-box. The following addition to the `main.js` defines an alias to the `../src` folder via the `@` symbol.

```javascript
const path = require('path');

module.exports = {
  //...
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [
      path.resolve(__dirname, '..'),
      'node_modules'
    ];

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
    };

    return config;
  },
};
```

For more details on this topic, check out [issue #11639](https://github.com/storybookjs/storybook/issues/11639) within the Storybook repository.

### Stylelint

**Documentation:** [https://stylelint.io/user-guide/configure](https://stylelint.io/user-guide/configure)

```bash
# copy my preferred config into your project
curl https://raw.githubusercontent.com/dascentral/nextjs-scaffold/main/.stylelintrc.json -o .stylelintrc.json && chmod 644 .stylelintrc.json
```

### Tailwind CSS

I have configured Tailwind CSS to account for the addition of code within the `pages/` and `components/` folder. I have also enabled all available plugins.

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
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

For additional guidance, see [Tailwind's Next.js framework-specific installation guide](https://tailwindcss.com/docs/guides/nextjs).

## Setup Script

Are you starting from scratch? Do you want to match this repository without cloning it?

### Quick Setup

```bash
# Install Next.js
npx create-next-app@latest .

# Install everything else
yarn add -D \
  autoprefixer \
  eslint-config-prettier \
  eslint-plugin-react \
  eslint-plugin-prettier \
  stylelint \
  stylelint-config-standard \
  stylelint-config-prettier \
  postcss \
  postcss-import \
  prettier \
  prettier-plugin-tailwindcss \
  tailwindcss \
  @headlessui/react \
  @tailwindcss/aspect-ratio \
  @tailwindcss/forms \
  @tailwindcss/line-clamp \
  @tailwindcss/typography

# Configure Tailwind CSS
npx tailwindcss init -p

# Remove CSS from the default Next.js scaffolding
rm styles/Home.module.css

# Download configuration files
rm .eslintrc.json && \
  curl https://raw.githubusercontent.com/dascentral/nextjs-scaffold/main/.editorconfig -o .editorconfig && \
  curl https://raw.githubusercontent.com/dascentral/nextjs-scaffold/main/.eslintignore -o .eslintignore && \
  curl https://raw.githubusercontent.com/dascentral/nextjs-scaffold/main/.eslintrc.js -o .eslintrc.js && \
	curl https://raw.githubusercontent.com/dascentral/nextjs-scaffold/main/.prettierrc.json -o .prettierrc.json && \
  curl https://raw.githubusercontent.com/dascentral/nextjs-scaffold/main/.stylelintrc.json -o .stylelintrc.json && \
  curl https://raw.githubusercontent.com/dascentral/nextjs-scaffold/main/tailwind.config.js -o tailwind.config.js && \
  curl https://raw.githubusercontent.com/dascentral/nextjs-scaffold/main/postcss.config.js -o postcss.config.js && \
  chmod 644 .editorconfig && \
  chmod 644 .eslintignore && \
  chmod 644 .eslintrc.js && \
  chmod 644 .prettierrc.json && \
  chmod 644 .stylelintrc.json && \
  chmod 644 tailwind.config.js && \
  chmod 644 postcss.config.js

# Install Storybook
npx storybook init
rm -rf stories

# Install Storybook plugins
yarn add -D @storybook/addon-a11y @storybook/addon-postcss@2.0.0
```

### Step-by-Step

```bash
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

# Install Headless UI
yarn add -D @headlessui/react

# Install PostCSS plugins
yarn add -D postcss-import

# Configure Tailwind CSS
npx tailwindcss init -p

# Remove CSS from the default Next.js scaffolding
rm styles/Home.module.css

# Download ESLint config
rm .eslintrc.json
curl https://raw.githubusercontent.com/dascentral/nextjs-scaffold/main/.eslintrc.js -o .eslintrc.js && chmod 644 .eslintrc.js

# Install Storybook
npx storybook init
yarn add -D @storybook/addon-a11y @storybook/addon-postcss@2.0.0
rm -rf stories

# Download EditorConfig config
curl https://raw.githubusercontent.com/dascentral/nextjs-scaffold/main/.editorconfig -o .editorconfig && chmod 644 .editorconfig

# Download .eslintignore
curl https://raw.githubusercontent.com/dascentral/nextjs-scaffold/main/.eslintignore -o .eslintignore && chmod 644 .eslintignore

# Download Prettier config
curl https://raw.githubusercontent.com/dascentral/nextjs-scaffold/main/.prettierrc.json -o .prettierrc.json && chmod 644 .prettierrc.json

# Download StyleLint config
curl https://raw.githubusercontent.com/dascentral/nextjs-scaffold/main/.stylelintrc.json -o .stylelintrc.json && chmod 644 .stylelintrc.json

# Download Tailwind CSS config
curl https://raw.githubusercontent.com/dascentral/nextjs-scaffold/main/tailwind.config.js -o tailwind.config.js && chmod 644 tailwind.config.js

# Download PostCSS config
curl https://raw.githubusercontent.com/dascentral/nextjs-scaffold/main/postcss.config.js -o postcss.config.js && chmod 644 postcss.config.js
```

## References

* [Streamlining your Tailwind CSS workflow with ESLint + Prettier](https://dev.to/mryechkin/streamlining-your-tailwind-css-workflow-with-eslint-prettier-1hg) — July 2022
* [Laravel Breeze with Inertia, React, Eslint, Prettier, Pint and Husky](https://www.luckymedia.dev/blog/laravel-breeze-with-inertia-react-eslint-prettier-pint-and-husky) — Sept 2022 — While this article references Laravel, the bulk of the content is relevant to this repository
* [theodorusclarence/ts-nextjs-tailwind-starter](theodorusclarence/ts-nextjs-tailwind-starter) — Another GitHub template repository that has significantly more happening that what I've gotten to here

## Roadmap

* Add [ESLint-plugin-tailwind](https://www.npmjs.com/package/eslint-plugin-tailwindcss)
* Add [Jest](https://jestjs.io/) and a sample test
* Consider use of [lint-staged](https://github.com/okonet/lint-staged)
