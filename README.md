# Next.js Scaffolding

This repository contains a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

I have also added my preferred technologies and utilities.

* [ESLint](https://eslint.org/)
* [Prettier](https://prettier.io/)
* [Stylelint](https://stylelint.io/)
* [Tailwind CSS](https://tailwindcss.com/)

Note that I am using [Yarn](https://yarnpkg.com/) for Node package management.

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Setup Script

Here is an inventory of the commands that will get a repository into a state that matches this one.

```shell
# Install Next.js
npx create-next-app@latest .

# Install Prettier
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier

# Install Stylelint
yarn add -D stylelint stylelint-config-standard stylelint-config-prettier

# Install & configure Tailwind CSS - https://tailwindcss.com/docs/guides/nextjs
yarn add -D tailwindcss postcss autoprefixer prettier-plugin-tailwindcss
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
