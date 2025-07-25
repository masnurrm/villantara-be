import { z } from 'zod';

const transactionSchema = z.object({
  id: z.string().uuid(),
  village_id: z.string().uuid(),
  name: z.string().min(1).max(100),
  capacity: z.number().min(0),
  min_price: z.number().int().min(0).optional(),
  max_price: z.number().int().min(0).optional(),
  description: z.string().min(1).max(500),
  status: z.string().min(1).max(50),
  type: z.string().min(1).max(50),
  duration: z.number().int().min(0).optional()
});

const transactionsSchema = z.array(transactionSchema);

export { transactionSchema, transactionsSchema };

export type Transaction = z.infer<typeof transactionSchema>;
export type Transactions = z.infer<typeof transactionsSchema>;
