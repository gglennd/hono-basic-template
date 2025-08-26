import { mainFactory } from '~/factory'

const app = mainFactory.createApp()

app.get('/', (c) => c.text('Hello Node.js!'))

export default app