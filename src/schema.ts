import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const task = pgTable("task", {
  id: serial().primaryKey(),
  task: text().notNull(),
  createdAt: timestamp().$defaultFn(() => /* @__PURE__ */ new Date()).notNull(),
  updatedAt: timestamp().$defaultFn(() => /* @__PURE__ */ new Date()).notNull(),
});

export const TaskInsertSchema = createInsertSchema(task, {
  task: schema => schema.min(1),
}).pick({ task: true });

export const TaskIdSchema = createSelectSchema(task, {
  id: z.coerce.number(),
}).pick({ id: true });

export type TaskInsertType = z.infer<typeof TaskInsertSchema>;
