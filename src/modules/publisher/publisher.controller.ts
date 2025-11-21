import { Request, Response } from "express";
import { PublisherService } from "./publisher.service";
import { createPublisherSchema, updatePublisherSchema } from "./publisher.schema";

const service = new PublisherService();

export class PublisherController {
  async create(req: Request, res: Response) {
    try {
      const data = createPublisherSchema.parse(req.body);
      const publisher = await service.create(data);
      res.status(201).json(publisher);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

  async findAll(req: Request, res: Response) {
    const publishers = await service.findAll();
    res.json(publishers);
  }

  async findOne(req: Request, res: Response) {
    const id = Number(req.params.id);
    const publisher = await service.findOne(id);
    if (!publisher) return res.status(404).json({ error: "Publisher not found" });
    res.json(publisher);
  }

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const data = updatePublisherSchema.parse(req.body);
      const publisher = await service.update(id, data);
      res.json(publisher);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    await service.delete(id);
    res.status(204).send();
  }
}
