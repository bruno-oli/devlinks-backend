import { UpdateUserUseCase } from '@/application/useCases/user/UpdateUserUseCase'
import { UserDatabaseRepository } from '@/infrastructure/persistence/UserDatabaseRepository'
import { UpdateUserController } from '@/interfaces/controllers/UpdateUserController'
import { Router } from 'express'

const updateUserRoute = Router()

const userDatabaseRepository = new UserDatabaseRepository()
const updateUserUseCase = new UpdateUserUseCase(userDatabaseRepository)
const updateUserController = new UpdateUserController(updateUserUseCase)

updateUserRoute.put('/users/:id', updateUserController.handle)

export { updateUserRoute }
