const config = {
    databaseURL:
        (process.env.NODE_ENV === 'development' ? undefined : process.env.DATABASE_URL) ??
        'file:./server/database/temp.db',
    databaseAuthToken: process.env.DATABASE_AUTH_TOKEN,
} as const;

export default config;
