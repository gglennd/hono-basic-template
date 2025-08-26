import { createFactory } from "hono/factory";

export const mainFactory = createFactory({
  defaultAppOptions: {
    strict: false
  },
  initApp: (app) => {

  }
})
