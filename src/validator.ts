import type { ValidationTargets } from "hono";
import type { z } from "zod"; // Import z from zod

import { zValidator as zv } from "@hono/zod-validator";
import { HTTPException } from "hono/http-exception";

export function zValidator<T extends z.ZodType, Target extends keyof ValidationTargets>(target: Target, schema: T) {
  return zv(target, schema, (result, c) => {
    if (!result.success) {
      throw new HTTPException(400, { res: c.newResponse(result.error.message), cause: result.error.cause });
    }
  });
}
