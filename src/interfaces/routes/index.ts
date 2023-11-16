import { Router } from 'express'
import { createUserRoute } from './user/createUser'

const routes = Router()

routes.use(createUserRoute)

export { routes }
