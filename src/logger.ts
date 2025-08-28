import { pinoLogger } from "hono-pino";
import { env } from "hono/adapter";
import { createMiddleware } from "hono/factory";
import pino from "pino";
import pretty from "pino-pretty";

import type { AppBindings } from "~/types";

export const logger = createMiddleware(async (c, next) => {
  const { LOG_LEVEL, NODE_ENV } = env<AppBindings>(c);

  return pinoLogger({
    pino: pino({ level: LOG_LEVEL || "info" }, NODE_ENV === "production"
      ? undefined
      : pretty({
          colorize: true,
          translateTime: "SYS:standard",
          ignore: "pid,hostname",
        })),
  })(c, next);
});
