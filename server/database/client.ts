import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import config from '@/config';

const client = createClient({
    url: config.databaseURL,
    authToken: config.databaseAuthToken
});

export const db = drizzle(client);
