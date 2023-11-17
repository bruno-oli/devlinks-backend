import { GetUserUseCase } from '@/application/useCases/user/GetUserUseCase'
import { UserDatabaseRepository } from '@/infrastructure/persistence/UserDatabaseRepository'
import { GetUserController } from '@/interfaces/controllers/GetUserController'
import { Router } from 'express'

const getUserRoute = Router()

const userDatabaseRepository = new UserDatabaseRepository()
const getUserUseCase = new GetUserUseCase(userDatabaseRepository)
const getUserController = new GetUserController(getUserUseCase)

getUserRoute.get('/users/:id', getUserController.handle)

export { getUserRoute }
