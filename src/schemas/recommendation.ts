import { z } from 'zod';

const recommendationSchema = z.object({
  id: z.string().uuid(),
  village_id: z.string().uuid(),
  carbon_captured: z.number().optional(),
  carbon_value: z.number().optional(),
  insight: z.string().optional(),
  deleted: z.boolean().default(false),
  created_at: z.date().default(new Date()),
  updated_at: z.date().optional(),
  deleted_at: z.date().optional()
});

const recommendationsSchema = z.array(recommendationSchema);

export { recommendationSchema, recommendationsSchema };

export type Recommendation = z.infer<typeof recommendationSchema>;
export type Recommendations = z.infer<typeof recommendationsSchema>;
