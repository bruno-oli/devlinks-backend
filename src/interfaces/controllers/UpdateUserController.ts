import { UserDTO } from '@/application/dtos/UserDTO'
import { UpdateUserUseCase } from '@/application/useCases/user/UpdateUserUseCase'
import { Request, Response } from 'express'

class UpdateUserController {
  private readonly updateUserUseCase: UpdateUserUseCase

  constructor(updateUserUseCase: UpdateUserUseCase) {
    this.updateUserUseCase = updateUserUseCase
  }

  handle = async (req: Request, res: Response) => {
    const { id } = req.params

    if (!id) {
      return res.status(400).json({ msg: 'Missing id parameter' })
    }

    const user = req.body as UserDTO

    try {
      const updatedUser = await this.updateUserUseCase.execute(id, user)

      return res.status(201).send({ msg: 'User updated', updatedUser })
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ msg: error.message })
      }

      return res.status(500).json({ msg: 'Internal server error' })
    }
  }
}

export { UpdateUserController }
