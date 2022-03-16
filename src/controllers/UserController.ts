import { Request, Response } from "express";
import { UserModel } from "src/database/models/UserModel";

class UserController {
  async fildAll(req:Request, res:Response){}
  async findOne(req:Request, res:Response){}
  async create(req:Request, res:Response){
    const {email, nome, cpfj, celular} = req.body;
    const user = await UserModel.create({
      email,
      nome,
      cpfj,
      celular
    })
    return res.status(201).json(user);
  }
  async update(req:Request, res:Response){}
  async destroy(req:Request, res:Response){}
}

export default new UserController();
