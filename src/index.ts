/* eslint-disable node/prefer-global/process */
import { serve } from "@hono/node-server";
import { getRuntimeKey } from "hono/adapter";

import app from "~/app";

const runtime = getRuntimeKey();

const server = serve({
  fetch: app.fetch,
  port: process.env.PORT as unknown as number,
// eslint-disable-next-line no-console
}, info => console.info(`${runtime}: Server running at port`, info.port));

function shutdown() {
  server.close((err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    process.exit(0);
  });
  process.exit(0);
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
