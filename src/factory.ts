import type { PinoLogger } from "hono-pino";

import { createFactory } from "hono/factory";

import type { AppBindings } from "~/types";

export const factory = createFactory<{
  Bindings: AppBindings;
  Variables: {
    logger: PinoLogger;
  };
}>({
  defaultAppOptions: {
    strict: false,
  },
});
