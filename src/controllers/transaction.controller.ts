import { Request, Response, NextFunction } from 'express';

import transactionService from '../services/transaction.service';

const transactionController = {
  getAllTransactions: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const transactions = await transactionService.findAll();
      res.status(200).json({
        status: String(res.statusCode),
        data: transactions
      });
    } catch (error) {
      next(error);
    }
  },

  createTransaction: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const transaction = await transactionService.create(req.body);
      res.status(201).json({
        status: String(res.statusCode),
        data: transaction
      });
    } catch (error) {
      next(error);
    }
  },

  findTransactionByStatus: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const transactions = await transactionService.findByStatus(req.params.status);
      res.status(200).json({
        status: String(res.statusCode),
        data: transactions
      });
    } catch (error) {
      next(error);
    }
  },

  findTransactionByVillageId: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const transactions = await transactionService.findByVillageId(req.params.villageId);
      res.status(200).json({
        status: String(res.statusCode),
        data: transactions
      });
    } catch (error) {
      next(error);
    }
  },

  findTransactionById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const transaction = await transactionService.findById(req.params.id);
      if (!transaction) {
        return res.status(404).json({
          status: String(res.statusCode),
          message: 'Data not found'
        });
      }
      res.status(200).json({
        status: String(res.statusCode),
        data: transaction
      });
    } catch (error) {
      next(error);
    }
  },

  updateTransaction: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const transaction = await transactionService.update(req.params.id, req.body);
      if (!transaction) {
        return res.status(404).json({
          status: String(res.statusCode),
          message: 'Transaction not found'
        });
      }
      res.status(200).json({
        status: String(res.statusCode),
        data: transaction
      });
    } catch (error) {
      next(error);
    }
  },

  deleteTransaction: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await transactionService.delete(req.params.id);
      res.status(204).json({
        status: String(res.statusCode),
        message: 'Transaction deleted successfully'
      });
    } catch (error) {
      next(error);
    }
  }
};

export default transactionController;
