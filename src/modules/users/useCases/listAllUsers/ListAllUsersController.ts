import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    let { user_id } = request.headers;

    user_id = user_id.toString();

    const users = this.listAllUsersUseCase.execute({ user_id });

    if (!users) return response.status(400).json({ error: "Unauthorized" });

    return response.status(200).json(users);
  }
}

export { ListAllUsersController };
