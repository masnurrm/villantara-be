import prisma from '../configs/database.connection';
import { Location, LocationImage } from '../schemas/location';

const locationRepository = {
  create: async (data: Location) => {
    return await prisma.location.create({
      data
    });
  },
  findAll: async () => {
    return await prisma.location.findMany({
      include: {
        location_images: true
      }
    });
  },
  findById: async (id: string) => {
    return await prisma.location.findUnique({
      include: {
        location_images: true
      },
      where: { id }
    });
  },
  update: async (id: string, data: Partial<Location>) => {
    return await prisma.location.update({
      where: { id },
      data
    });
  },
  delete: async (id: string) => {
    return await prisma.location.delete({
      where: { id }
    });
  },
  addImage: async (locationId: string, imageData: LocationImage) => {
    return await prisma.locationImage.create({
      data: {
        ...imageData,
        location_id: locationId
      }
    });
  },
  deleteImage: async (id: string) => {
    return await prisma.locationImage.delete({
      where: { id }
    });
  }
};

export default locationRepository;
