import { Router } from 'express';

import transactionController from '../controllers/transaction.controller';

const transactionRouter = Router();

transactionRouter.get('/', transactionController.getAllTransactions);
transactionRouter.post('/', transactionController.createTransaction);
transactionRouter.get('/status/:status', transactionController.findTransactionByStatus);
transactionRouter.get('/village/:villageId', transactionController.findTransactionByVillageId);
transactionRouter.get('/:id', transactionController.findTransactionById);
transactionRouter.put('/:id', transactionController.updateTransaction);
transactionRouter.delete('/:id', transactionController.deleteTransaction);

export default transactionRouter;
