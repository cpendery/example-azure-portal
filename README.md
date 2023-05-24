# Azure AD Example Portal

This example sets up the boilerplate for an Azure AD Portal. You can see a [live version here](https://example-azure-portal.vercel.app). The boilerplate includes the following features:

- Recoil state management
- SWR data fetching
- MSAL.js authentication

## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/cpendery/example-azure-portal)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example https://github.com/cpendery/example-azure-portal
```

```bash
yarn create next-app --example https://github.com/cpendery/example-azure-portal
```

```bash
pnpm create next-app --example https://github.com/cpendery/example-azure-portal
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see AMP validation errors in the console.

## Todo

Things you need to do after installing the boilerplate:

1. Update your environment variables in `.env.local` with your app-specific data (`NEXT_PUBLIC_CLIENT_ID`, `NEXT_PUBLIC_REDIRECT_URI`).

## Deployment

For production builds, you need to run (the app will be build into the `.next` folder):

```shell
$ yarn build
```

To start the application in production mode, run:

```shell
$ yarn start
```

Deploy it to the cloud with [Vercel](https://vercel.com/new) ([Documentation](https://nextjs.org/docs/deployment)).
