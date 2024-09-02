import express from 'express'
import router from './routes/index.mjs'
import logRequests from './utils/logger.mjs'


const PORT = 3000
const app = express()

app.use(express.json(), logRequests, router)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
