import { z } from 'zod';
// import require from 'require';

const village = z.object({
  id: z.string().uuid(),
  name: z.string().min(1).max(100),
  detail_loc: z.string().min(1).max(255),
  coords: z.any(),
  total_area: z.number().min(0).optional(),
  offer: z.boolean().optional(),
  in_contract: z.boolean().optional(),
  created_at: z.date().optional(),
  updated_at: z.date().optional()
  // user: z.lazy(() => require('./user').default.user).optional(),
  // recommendation: z.lazy(() => require('./recommendation').default.recommendation).optional(),
  // location: z.lazy(() => require('./location').default.location).optional()
});

export default {
  village
};
