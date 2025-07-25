import { z } from 'zod';

import { locationImagesSchema } from './location';
import { recommendationsSchema } from './recommendation';
import { transactionsSchema } from './transaction';
import { usersSchema } from './user';

const villageSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1).max(100),
  district: z.string().min(1).max(100),
  city: z.string().min(1).max(100),
  province: z.string().min(1).max(100),
  latitude: z.number().min(-90).max(90).optional(),
  longitude: z.number().min(-180).max(180).optional(),
  total_area: z.number().min(0).optional(),
  offer: z.boolean().default(false),
  in_contract: z.boolean().default(false),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  users: usersSchema.optional(),
  recommendations: recommendationsSchema.optional(),
  locations: locationImagesSchema.optional(),
  transactions: transactionsSchema.optional()
});

export { villageSchema };

export type Village = z.infer<typeof villageSchema>;
