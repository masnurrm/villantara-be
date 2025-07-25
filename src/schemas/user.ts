import { z } from 'zod';

const userSchema = z.object({
  id: z.string().uuid(),
  nik: z.string().min(1).max(16),
  name: z.string().min(1).max(100),
  phone: z.string().min(1).max(20).optional(),
  email: z.string().email(),
  password: z.string().min(6).max(100),
  role: z.string().min(1).max(20),
  status: z.string().optional(),
  village_id: z.string().uuid().optional(),
  access_token: z.string().optional(),
  deleted: z.boolean().default(false),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  deleted_at: z.date().optional()
});

const usersSchema = z.array(userSchema);

export { userSchema, usersSchema };

export type User = z.infer<typeof userSchema>;
export type Users = z.infer<typeof usersSchema>;
