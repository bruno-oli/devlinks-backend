import { DeleteUserUseCase } from '@/application/useCases/user/DeleteUserUseCase'
import { UserDatabaseRepository } from '@/infrastructure/persistence/UserDatabaseRepository'
import { DeleteUserController } from '@/interfaces/controllers/DeleteUserController'
import { Router } from 'express'

const deleteUserRoute = Router()

const userDatabaseRepository = new UserDatabaseRepository()
const deleteUserUseCase = new DeleteUserUseCase(userDatabaseRepository)
const deleteUserController = new DeleteUserController(deleteUserUseCase)

deleteUserRoute.delete('/users/:id', deleteUserController.handle)

export { deleteUserRoute }
