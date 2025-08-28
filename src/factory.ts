import type { PinoLogger } from "hono-pino";

import { createFactory } from "hono/factory";

import type { AppBindings } from "~/types";

import { logger } from "~/logger";

export const mainFactory = createFactory<{
  Bindings: AppBindings;
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
