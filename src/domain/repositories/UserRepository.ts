import { UserDTO } from '@/application/dtos/UserDTO'
import { User } from '../entities/User'

export interface UserRepository {
  create(user: UserDTO): Promise<User>
  findByEmail(email: string): Promise<User | null>
  findById(id: string): Promise<User | null>
  update(id: string, user: UserDTO): Promise<User>
  delete(id: string): Promise<void>
}
