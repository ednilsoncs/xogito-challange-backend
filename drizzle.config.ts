import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    host: env.POSTGRES_HOST,
    port: env.POSTGRES_PORT,
    database: env.POSTGRES_DB,
    password: env.POSTGRES_PASSWORD,
    user: env.POSTGRES_USERNAME
  },
  tablesFilter: ["take-home-fullstack_*"],
} satisfies Config;
