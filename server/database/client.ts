import config from '@/config';
import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema';

const client = createClient({
    url: config.databaseURL,
    authToken: config.databaseAuthToken
});

export const db = drizzle(client, { schema });
