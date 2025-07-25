import villageRepository from '../repositories/village.repository';
import { Village } from '../schemas/village';

const villageService = {
  getAllVillages: async () => {
    return await villageRepository.getAllVillages();
  },
  createVillage: async (data: Village) => {
    return await villageRepository.createVillage(data);
  },
  findVillageById: async (id: string) => {
    return await villageRepository.findVillageById(id);
  },
  updateVillage: async (id: string, data: Partial<Village>) => {
    return await villageRepository.updateVillage(id, data);
  },
  deleteVillage: async (id: string) => {
    return await villageRepository.deleteVillage(id);
  }
};

export default villageService;
