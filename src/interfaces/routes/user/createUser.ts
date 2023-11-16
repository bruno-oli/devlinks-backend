import { Router } from 'express'
import { CreateUserController } from '../../controllers/CreateUserController'
import { CreateUserUseCase } from '@/application/useCases/user/CreateUserUseCase'
import { UserDatabaseRepository } from '@/infrastructure/persistence/UserDatabaseRepository'

const createUserRoute = Router()

const userDatabaseRepository = new UserDatabaseRepository()
const createUserUseCase = new CreateUserUseCase(userDatabaseRepository)
const createUserController = new CreateUserController(createUserUseCase)

createUserRoute.post('/users', createUserController.handle)

export { createUserRoute }
