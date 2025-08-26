import { serve } from '@hono/node-server'
import app from '~/app'

const server = serve({
  fetch: app.fetch,
  port: process.env.PORT as unknown as number
}, (info) => console.info("Server running at port", info.port))

const shutdown = () => {
  server.close((err) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    process.exit(0)
  })
  process.exit(0)
}

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)