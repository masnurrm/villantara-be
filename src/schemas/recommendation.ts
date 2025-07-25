import { z } from 'zod';

const recommendationSchema = z.object({
  id: z.string().uuid(),
  competency: z.string().min(1).max(100),
  description: z.string().min(1).max(255),
  deleted: z.boolean().default(false),
  deleted_at: z.date().optional()
});

const recommendationsSchema = z.array(recommendationSchema);

export { recommendationSchema, recommendationsSchema };

export type Recommendation = z.infer<typeof recommendationSchema>;
export type Recommendations = z.infer<typeof recommendationsSchema>;
