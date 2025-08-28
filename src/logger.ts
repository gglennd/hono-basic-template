import { pinoLogger } from "hono-pino";
import { createMiddleware } from "hono/factory";
import pino from "pino";
import pretty from "pino-pretty";

export const logger = createMiddleware(async (c, next) => {
  return pinoLogger({
    // TODO -> set level to "info"
    // TODO -> pino-pretty : Set undefine on production
    pino: pino({ level: "debug" }, pretty({
      colorize: true,
      translateTime: "SYS:standard",
      ignore: "pid,hostname",

    })),
  })(c, next);
});
