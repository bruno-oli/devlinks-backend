import { CreateUserUseCase } from '@/application/useCases/user/CreateUserUseCase'
import { Request, Response } from 'express'

class CreateUserController {
  private readonly createUserUseCase: CreateUserUseCase

  constructor(createUserUseCase: CreateUserUseCase) {
    this.createUserUseCase = createUserUseCase
  }

  handle = async (req: Request, res: Response) => {
    const user = req.body

    console.log(this)

    try {
      const createdUser = await this.createUserUseCase.execute(user)

      return res.status(201).send({ msg: 'User created', createdUser })
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ msg: error.message })
      }

      return res.status(500).json({ msg: 'Internal server error' })
    }
  }
}

export { CreateUserController }
