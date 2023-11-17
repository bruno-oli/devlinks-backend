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

  async findById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    })

    return user
  }

  async update(id: string, user: UserDTO): Promise<User> {
    const updatedUser = await prisma.user.update({
      where: {
        id,
      },
      data: user,
    })

    return updatedUser
  }

  async delete(id: string): Promise<void> {
    await prisma.user.delete({
      where: {
        id,
      },
    })
  }
}

export { UserDatabaseRepository }
