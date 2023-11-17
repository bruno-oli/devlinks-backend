import { Router } from 'express'
import { createUserRoute } from './createUser'
import { getUserRoute } from './getUser'
import { updateUserRoute } from './updateUser'
import { deleteUserRoute } from './deleteUser'

const userRoutes = Router()

userRoutes.use(createUserRoute)
userRoutes.use(getUserRoute)
userRoutes.use(updateUserRoute)
userRoutes.use(deleteUserRoute)

export { userRoutes }
