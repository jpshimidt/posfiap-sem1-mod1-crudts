import { prisma } from "../database/prisma";

export class UserService {
  create(data: any) {
    return prisma.user.create({ data });
  }

  findAll() {
    return prisma.user.findMany();
  }

  update(id: number, data: any) {
    return prisma.user.update({ where: { id }, data });
  }

  delete(id: number) {
    return prisma.user.delete({ where: { id } });
  }
}