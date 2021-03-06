[![Netlify Status](https://api.netlify.com/api/v1/badges/5cb60d1e-cdf8-4960-a1be-356502e38d9c/deploy-status)](https://app.netlify.com/sites/autocounter/deploys)

# Incredible Counter

An hobby project to make counter app code structure as much complex as possible

### Base

Base branch pointed to [master](https://github.com/shrivatsabhat/incredible-counter/tree/master)

- Clone the [develop](https://github.com/shrivatsabhat/incredible-counter) branch to make changes or to contribute

# Install

```bash
  yarn install
```

# Build

```bash
yarn build
```

# Run

> run as watch mode under localhost:3000

```bash
yarn dev
```

or

> run as watch mode under netwrok at port 3000

```bash
yarn dev --host
```

# Format and Lint

> Check for linter and code formater

```bash
yarn lint:check
yarn format:check
```

> Fix the issue on code format and linting

```bash
yarn format
yarn lint
```

# Generate Components

> Generate the components folder as per pre-defined template by running the following command.

```bash
yarn plop <compnent name>
```

> or

```bash
yarn plop
```

- enter component name
- choose the folder location
- done

# View Componets

> Check all available component element in this hobby project (this may not work as per planned)

```bash
yarn storybook
```
