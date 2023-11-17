import { UserDatabaseRepository } from '@/infrastructure/persistence/UserDatabaseRepository'

class GetUserUseCase {
  private readonly userRepository: UserDatabaseRepository

  constructor(userRepository: UserDatabaseRepository) {
    this.userRepository = userRepository
  }

  async execute(id: string) {
    return await this.userRepository.findById(id)
  }
}

export { GetUserUseCase }
