import { prisma } from "../../database/prisma";
import { CreateBookDTO, UpdateBookDTO } from "./book.schema";

export class BookService {
  async create(data: CreateBookDTO) {
    return prisma.book.create({ data });
  }

  async findAll() {
    return prisma.book.findMany();
  }

  async findOne(id: number) {
    return prisma.book.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateBookDTO) {
    return prisma.book.update({ where: { id }, data });
  }

  async delete(id: number) {
    return prisma.book.delete({ where: { id } });
  }
}
