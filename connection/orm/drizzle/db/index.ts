import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

// import { env } from '../env.mjs';

// probably an env var
const connectionString = process.env.SUPABASE_DIRECT_URL ?? '';
const sql = postgres(connectionString);
// import { user } from '../schema';
const db = drizzle(sql);

//const allUsers = await db.select().from(user);
