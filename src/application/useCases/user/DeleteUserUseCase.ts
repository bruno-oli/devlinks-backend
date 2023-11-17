import { UserDatabaseRepository } from '@/infrastructure/persistence/UserDatabaseRepository'

class DeleteUserUseCase {
  private readonly userRepository: UserDatabaseRepository

  constructor(userRepository: UserDatabaseRepository) {
    this.userRepository = userRepository
  }

  async execute(id: string) {
    const userExists = await this.userRepository.findById(id)

    if (!userExists) {
      throw new Error('User not found')
    }

    return await this.userRepository.delete(id)
  }
}

export { DeleteUserUseCase }
