import { GetUserUseCase } from '@/application/useCases/user/GetUserUseCase'
import { Request, Response } from 'express'

class GetUserController {
  private readonly getUserUseCase: GetUserUseCase

  constructor(getUserUseCase: GetUserUseCase) {
    this.getUserUseCase = getUserUseCase
  }

  handle = async (req: Request, res: Response) => {
    const { id } = req.params

    if (!id) {
      return res.status(400).json({ msg: 'Missing id parameter' })
    }

    try {
      const user = await this.getUserUseCase.execute(id)

      if (!user) {
        return res.status(404).json({ msg: 'User not found' })
      }

      return res.status(200).send({ msg: 'User found', user })
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ msg: error.message })
      }

      return res.status(500).json({ msg: 'Internal server error' })
    }
  }
}

export { GetUserController }
