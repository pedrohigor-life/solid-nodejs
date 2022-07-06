import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;

      const superUser = this.turnUserAdminUseCase.execute({ user_id });

      return response.status(200).json(superUser);
    } catch (error) {
      return response.status(404).json({ error: "User not fund" });
    }
  }
}

export { TurnUserAdminController };
