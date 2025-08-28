import { eq } from "drizzle-orm";

import { db } from "~/db";
import { factory } from "~/factory";
import { TaskIdSchema, TaskInsertSchema, task as taskTable } from "~/schema";
import { zValidator } from "~/validator";

export const getTask = factory.createHandlers(async (c) => {
  const response = await db.select().from(taskTable);
  return c.json(response, 200);
});

export const postTask = factory.createHandlers(zValidator("json", TaskInsertSchema), async (c) => {
  const { task } = c.req.valid("json");

  const [tasks] = await db.insert(taskTable).values({ task }).returning();
  return c.json(tasks, 200);
});

export const patchTask = factory.createHandlers(zValidator("param", TaskIdSchema), zValidator("json", TaskInsertSchema), async (c) => {
  const { id } = c.req.valid("param");
  const data = c.req.valid("json");

  const [updated] = await db
    .update(taskTable)
    .set({
      ...data,
      updatedAt: new Date(),
    })
    .where(eq(taskTable.id, id))
    .returning();

  if (!updated) {
    return c.json({ error: "Task not found" }, 404);
  }

  return c.json({ message: "Task updated", task: updated }, 200);
});

export const deleteTask = factory.createHandlers(zValidator("param", TaskIdSchema), async (c) => {
  const { id } = c.req.valid("param");
  const [tasks] = await db.delete(taskTable).where(eq(taskTable.id, id)).returning();

  if (!tasks) {
    return c.json({ error: "Task not found" }, 404);
  }
  return c.json({ message: "Task deleted", tasks }, 200);
});
