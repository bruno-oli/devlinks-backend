import { UserDTO } from '../../dtos/UserDTO'
import { UserDatabaseRepository } from '@/infrastructure/persistence/UserDatabaseRepository'

class CreateUserUseCase {
  constructor(private readonly userRepository: UserDatabaseRepository) {
    this.userRepository = userRepository
  }

  async execute(user: UserDTO) {
    const userExists = await this.userRepository.findByEmail(user.email)

    if (userExists) {
      throw new Error('User already exists')
    }

    return await this.userRepository.create(user)
  }
}

export { CreateUserUseCase }
