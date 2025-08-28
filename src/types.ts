import type { router } from "~/app";

export type AppBindings = {
  NODE_ENV: "development" | "production";
  LOG_LEVEL: "fatal" | "error" | "warn" | "info" | "debug" | "trace" | "silent";
};

export type RouteType = typeof router[number];
