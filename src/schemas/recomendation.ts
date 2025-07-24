import { z } from 'zod';

const recommendation = z.object({
  id: z.string().uuid(),
  competency: z.string().min(1).max(100),
  description: z.string().min(1).max(255),
  deleted: z.boolean().default(false),
  deleted_at: z.date().optional()
});

export default {
  recommendation
};
