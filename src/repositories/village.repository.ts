import prisma from '../configs/database.connection';
import { Village } from '../schemas/village';

const villageRepository = {
  getAllVillages: async () => {
    return await prisma.village.findMany({
      include: {
        users: true,
        recommendations: true,
        locations: true
      }
    });
  },
  createVillage: async (data: Village) => {
    return await prisma.village.create({
      data
    });
  },
  findVillageById: async (id: string) => {
    return await prisma.village.findUnique({
      include: {
        users: true,
        recommendations: true,
        locations: true
      },
      where: { id }
    });
  },
  updateVillage: async (id: string, data: Partial<Village>) => {
    return await prisma.village.update({
      where: { id },
      data
    });
  },
  deleteVillage: async (id: string) => {
    return await prisma.village.delete({
      where: { id }
    });
  }
};

export default villageRepository;
