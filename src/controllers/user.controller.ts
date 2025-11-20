import { Request, Response } from "express";
import { UserService } from "../services/user.services";


export class UserController {
private service = new UserService();


create = async (req: Request, res: Response) => {
const user = await this.service.create(req.body);
res.json(user);
};


findAll = async (req: Request, res: Response) => {
const users = await this.service.findAll();
res.json(users);
};


update = async (req: Request, res: Response) => {
const user = await this.service.update(Number(req.params.id), req.body);
res.json(user);
};


delete = async (req: Request, res: Response) => {
const user = await this.service.delete(Number(req.params.id));
res.json(user);
};
}