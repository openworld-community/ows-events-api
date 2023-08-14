import { migrate } from 'drizzle-orm/libsql/migrator';
import { db } from '../../server/database/client';

(async () => {
    await migrate(db, { migrationsFolder: './server/database/migrations' });
})();
