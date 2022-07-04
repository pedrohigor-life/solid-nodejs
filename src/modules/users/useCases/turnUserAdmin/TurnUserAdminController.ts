import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    const superUser = this.turnUserAdminUseCase.execute({ user_id });

    if (!superUser)
      return response.status(404).json({ error: "User not fund" });

    return response.status(200).json(superUser);
  }
}

export { TurnUserAdminController };
