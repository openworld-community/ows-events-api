# Afisha Peredelano Events API

## NPM scripts

### Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

### Code Quality

```bash
# Log type errors to console
npm run typecheck
# Log ESLint errors and warnings to console
npm run lint
# Run prettier formatting on the whole app. Logs files which were formatted
npm run format
# Run prettier to log files with incorrect formatting
npm run check-format
```

### Build

```bash
# Build the application for production
npm run build
# Locally preview production build
npm run preview
```

### Database

We use libSQL(SQLite fork) which makes it really easy to deploy a local database for testing purposes.

Zero configuration required except for the commands below.

```bash
# Sync database with the defined schema
npm run db-migrate
# Fill database with data
npm run db-populate
# Starts a studio - an interface for interacting with your database
npm run db-studio
```

## Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.
