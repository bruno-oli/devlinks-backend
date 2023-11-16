import { UserDTO } from '@/application/dtos/UserDTO'
import { User } from '@/domain/entities/User'
import { UserRepository } from '@/domain/repositories/UserRepository'
import { prisma } from '../PrismaClientInstance'

class UserDatabaseRepository implements UserRepository {
  async create(user: UserDTO): Promise<User> {
    const createdUser = await prisma.user.create({
      data: user,
    })

    return createdUser
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    return user
  }
}

export { UserDatabaseRepository }
