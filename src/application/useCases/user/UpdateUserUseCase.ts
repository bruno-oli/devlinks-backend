import { UserDTO } from '@/application/dtos/UserDTO'
import { UserDatabaseRepository } from '@/infrastructure/persistence/UserDatabaseRepository'

class UpdateUserUseCase {
  private readonly userRepository: UserDatabaseRepository

  constructor(userRepository: UserDatabaseRepository) {
    this.userRepository = userRepository
  }

  async execute(id: string, user: UserDTO) {
    const userExists = await this.userRepository.findById(id)

    if (!userExists) {
      throw new Error('User not found')
    }

    return await this.userRepository.update(id, user)
  }
}

export { UpdateUserUseCase }
