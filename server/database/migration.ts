import { migrate } from 'drizzle-orm/libsql/migrator';
import { db } from './client';

(async () => {
    await migrate(db, { migrationsFolder: './server/database/migrations' });
})();
