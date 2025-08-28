import { Hono } from "hono";

import { factory } from "~/factory";
import { logger } from "~/logger";
import * as task from "~/task-handler";

const app = new Hono({ strict: false })
  .use(logger)
  .use("/", async c => c.text("Hello Nodejs!"));

const taskRouter = factory.createApp()
  .basePath("/api")
  .get("/task", ...task.getTask)
  .post("/task", ...task.postTask)
  .patch("/task/:id", ...task.patchTask)
  .delete("/task/:id", ...task.deleteTask);

export const router = [taskRouter] as const;
router.map(route => app.route("/", route));
export default app;
