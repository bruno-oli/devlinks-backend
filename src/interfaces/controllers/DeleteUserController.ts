import { DeleteUserUseCase } from '@/application/useCases/user/DeleteUserUseCase'
import { Request, Response } from 'express'

class DeleteUserController {
  private readonly deleteUserUseCase: DeleteUserUseCase

  constructor(deleteUserUseCase: DeleteUserUseCase) {
    this.deleteUserUseCase = deleteUserUseCase
  }

  handle = async (req: Request, res: Response) => {
    const { id } = req.params

    try {
      await this.deleteUserUseCase.execute(id as string)

      return res.status(204).send()
    } catch (error) {
      if (error instanceof Error) {
        return res.status(404).json({ msg: error.message })
      }

      return res.status(500).json({ msg: 'Internal server error' })
    }
  }
}

export { DeleteUserController }
