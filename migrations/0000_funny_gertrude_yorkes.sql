CREATE TABLE "task" (
	"id" serial PRIMARY KEY NOT NULL,
	"task" text NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL
);
