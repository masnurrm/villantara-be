import prisma from '../configs/database.connection';
import { Transaction } from '../schemas/transaction';

const transactionRepository = {
  create: async (data: Transaction) => {
    return await prisma.transaction.create({
      data
    });
  },
  findAll: async () => {
    return await prisma.transaction.findMany();
  },
  findByStatus: async (status: string) => {
    return await prisma.transaction.findMany({
      where: { status }
    });
  },
  findByVillageId: async (villageId: string) => {
    return await prisma.transaction.findMany({
      where: { village_id: villageId }
    });
  },
  findById: async (id: string) => {
    return await prisma.transaction.findUnique({
      where: { id }
    });
  },
  update: async (id: string, data: Partial<Transaction>) => {
    return await prisma.transaction.update({
      where: { id },
      data
    });
  },
  delete: async (id: string) => {
    return await prisma.transaction.delete({
      where: { id }
    });
  }
};

export default transactionRepository;
