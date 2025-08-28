import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "~/schema";

// eslint-disable-next-line node/prefer-global/process
const client = postgres(process.env.DATABASE_URL as string);
export const db = drizzle({ client, schema, casing: "snake_case" });
