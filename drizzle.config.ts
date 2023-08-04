import config from './config';
import { type Config } from 'drizzle-kit';

export default {
    out: './server/database/migrations',
    schema: './server/database/schema.ts',
    driver: 'turso',
    dbCredentials: {
        url: config.databaseURL,
        authToken: config.databaseAuthToken
    }
} satisfies Config;
