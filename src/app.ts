import express from 'express'
import 'dotenv/config'
import { routes } from './interfaces/routes'

const app = express()

app.use(express.json())

/* Routes */
app.use(routes)

export { app }
