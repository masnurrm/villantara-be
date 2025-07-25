import { z } from 'zod';

const coordinate = z.tuple([z.number(), z.number()]);

const locationImageSchema = z.object({
  id: z.string().uuid(),
  location_id: z.string().uuid(),
  url: z.string().url()
});

const locationImagesSchema = z.array(locationImageSchema);

const locationSchema = z.object({
  id: z.string().uuid(),
  village_id: z.string().uuid(),
  coords: z.object({
    type: z.literal('Polygon'),
    coordinates: z.array(z.array(coordinate))
  }),
  area: z.number().min(0).optional(),
  plant_type: z.string().optional(),
  humidity: z.number().optional(),
  soil_ph: z.number().optional(),
  temperature: z.number().optional(),
  business_unit: z.string().optional(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  location_images: locationImagesSchema.optional()
});

const locationsSchema = z.array(locationSchema);
export { locationsSchema, locationSchema, locationImageSchema, locationImagesSchema };

export type Location = z.infer<typeof locationSchema>;
export type LocationImage = z.infer<typeof locationImageSchema>;
export type LocationImages = z.infer<typeof locationImagesSchema>;
export type Locations = z.infer<typeof locationsSchema>;
