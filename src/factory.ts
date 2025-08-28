import type { PinoLogger } from "hono-pino";

import { createFactory } from "hono/factory";

import { logger } from "~/logger";

export const mainFactory = createFactory<{
  Variables: {
    logger: PinoLogger;
  };
}>({
  defaultAppOptions: {
    strict: false,
  },
  initApp: (app) => {
    app.use(logger);
  },
});
