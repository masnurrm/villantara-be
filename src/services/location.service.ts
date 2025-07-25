import { v4 as uuidv4 } from 'uuid';

import locationRepository from '../repositories/location.repository';
import { Location, LocationImage } from '../schemas/location';

const locationService = {
  create: async (data: Location) => {
    const id = uuidv4();
    return await locationRepository.create({ ...data, id });
  },

  findAll: async () => {
    return await locationRepository.findAll();
  },

  findById: async (id: string) => {
    return await locationRepository.findById(id);
  },

  update: async (id: string, data: Partial<Location>) => {
    const updated_at = new Date();
    return await locationRepository.update(id, { ...data, updated_at });
  },

  delete: async (id: string) => {
    return await locationRepository.delete(id);
  },

  addImage: async (locationId: string, imageData: LocationImage) => {
    imageData.id = uuidv4();
    return await locationRepository.addImage(locationId, imageData);
  },

  deleteImage: async (id: string) => {
    return await locationRepository.deleteImage(id);
  }
};

export default locationService;
