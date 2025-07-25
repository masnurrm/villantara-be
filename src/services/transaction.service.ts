import { v4 as uuidv4 } from 'uuid';

import transactionRepository from '../repositories/transaction.repository';
import { Transaction } from '../schemas/transaction';

const transactionService = {
  create: async (data: Transaction) => {
    const id = uuidv4();
    return await transactionRepository.create({ ...data, id });
  },

  findAll: async () => {
    return await transactionRepository.findAll();
  },

  findByStatus: async (status: string) => {
    return await transactionRepository.findByStatus(status);
  },

  findById: async (id: string) => {
    return await transactionRepository.findById(id);
  },

  update: async (id: string, data: Partial<Transaction>) => {
    return await transactionRepository.update(id, data);
  },

  delete: async (id: string) => {
    return await transactionRepository.delete(id);
  }
};

export default transactionService;
