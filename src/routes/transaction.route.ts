import { Router } from 'express';

import transactionController from '../controllers/transaction.controller';

const transactionRouter = Router();

transactionRouter.get('/', transactionController.getAllTransactions);
transactionRouter.post('/', transactionController.createTransaction);
transactionRouter.get('/filter/:status', transactionController.findTransactionByStatus);
transactionRouter.get('/:id', transactionController.findTransactionById);
transactionRouter.put('/:id', transactionController.updateTransaction);
transactionRouter.delete('/:id', transactionController.deleteTransaction);

export default transactionRouter;
