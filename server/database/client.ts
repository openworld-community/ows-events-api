import config from '@/config';
import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';

const client = createClient({
    url: config.databaseURL,
    authToken: config.databaseAuthToken,
});

export const db = drizzle(client);
