## Contributing

To contribute, clone this repository then run the following:

```bash
yarn install
yarn dev
```

This will install all necessary dependencies for the [Turborepo](https://turborepo.org) and then locally run all the project's apps within the `apps` directory.

**Note**: make sure to use [Yarn](https://yarnpkg.com) with this Turborepo.

### Apps

- `api`: [Next.js](https://nextjs.org) web application with the REST API and connection to the database.
- `marketing`: [Next.js](https://nextjs.org) web application for marketing, help, and other resources.
- `mobile`: [React Native](https://reactnative.dev) mobile application.
- `web`: [Vite](https://vitejs.dev) React web application.

### Packages

- `ui-mobile`: React component library for the `mobile` app.
- `ui-web`: React component library for all web applications, specifically the `web` app.

### Development Scripts

The following scripts can be used in development:

```bash
yarn dev
```

- Runs all apps and packages.

```bash
yarn dev-mobile
```

- Runs `api`, `mobile`, and `ui-mobile`.

```bash
yarn dev-web
```

- Runs `api`, `marketing`, `web`, and `ui-web`.

## Formating

Code is formatted with [ESLint](https://eslint.org) and [Prettier](https://prettier.io). To format, run:

```bash
yarn format
```
