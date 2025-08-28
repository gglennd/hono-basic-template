import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./migrations",
  schema: "./src/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    // eslint-disable-next-line node/prefer-global/process
    url: process.env.DATABASE_URL as string,
  },
  casing: "snake_case",
});
