import { prisma } from "../../database/prisma";
import { CreatePublisherDTO, UpdatePublisherDTO } from "./publisher.schema";

export class PublisherService {
  async create(data: CreatePublisherDTO) {
    return prisma.publisher.create({ data });
  }

  async findAll() {
    return prisma.publisher.findMany({ include: { books: true } });
  }

  async findOne(id: number) {
    return prisma.publisher.findUnique({ where: { id }, include: { books: true } });
  }

  async update(id: number, data: UpdatePublisherDTO) {
    return prisma.publisher.update({ where: { id }, data });
  }

  async delete(id: number) {
    return prisma.publisher.delete({ where: { id } });
  }
}
