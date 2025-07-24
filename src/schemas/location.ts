import { z } from 'zod';

const location = z.object({
  id: z.string().uuid(),
  coords: z.any(),
  area: z.number().min(0).optional(),
  plant_type: z.string().optional(),
  humidity: z.number().optional(),
  soil_ph: z.number().optional(),
  temperature: z.number().optional(),
  business_unit: z.string().optional()
  // village: z.lazy(() => require('./village').default.village).optional(),
  // image: z.lazy(() => require('./locationImage').default.locationImage).optional()
});

const locationImage = z.object({
  id: z.string().uuid(),
  url: z.string().url()
});

export default {
  location,
  locationImage
};
