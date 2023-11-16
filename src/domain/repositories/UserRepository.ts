import { UserDTO } from '@/application/dtos/UserDTO'
import { User } from '../entities/User'

export interface UserRepository {
  create(user: UserDTO): Promise<User>
  findByEmail(email: string): Promise<User | null>
}
