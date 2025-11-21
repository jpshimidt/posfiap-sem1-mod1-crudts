import { Request, Response } from "express";
import { BookService } from "./book.service";
import { createBookSchema, updateBookSchema } from "./book.schema";

const service = new BookService();

export class BookController {
  async create(req: Request, res: Response) {
    try {
      const data = createBookSchema.parse(req.body);
      const book = await service.create(data);
      res.status(201).json(book);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

  async findAll(req: Request, res: Response) {
    const books = await service.findAll();
    res.json(books);
  }

  async findOne(req: Request, res: Response) {
    const id = Number(req.params.id);
    const book = await service.findOne(id);
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.json(book);
  }

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const data = updateBookSchema.parse(req.body);
      const book = await service.update(id, data);
      res.json(book);
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
