import { Request, Response, NextFunction } from 'express';

import locationService from '../services/location.service';

const locationController = {
  getAllLocations: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const locations = await locationService.findAll();
      res.status(200).json({
        status: String(res.statusCode),
        data: locations
      });
    } catch (error) {
      next(error);
    }
  },

  createLocation: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const location = await locationService.create(req.body);
      res.status(201).json({
        status: String(res.statusCode),
        data: location
      });
    } catch (error) {
      next(error);
    }
  },

  findLocationById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const location = await locationService.findById(req.params.id);
      if (!location) {
        return res.status(404).json({ message: 'Location not found' });
      }
      res.status(200).json({
        status: String(res.statusCode),
        data: location
      });
    } catch (error) {
      next(error);
    }
  },

  updateLocation: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const location = await locationService.update(req.params.id, req.body);
      if (!location) {
        return res.status(404).json({ message: 'Location not found' });
      }
      res.status(200).json({
        status: String(res.statusCode),
        data: location
      });
    } catch (error) {
      next(error);
    }
  },

  deleteLocation: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await locationService.delete(req.params.id);
      res.status(204).json({
        status: String(res.statusCode),
        message: 'Location deleted successfully'
      });
    } catch (error) {
      next(error);
    }
  },

  addImage: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const imageData = req.body;
      const image = await locationService.addImage(req.params.id, imageData);
      res.status(201).json(image);
    } catch (error) {
      next(error);
    }
  },

  deleteImage: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await locationService.deleteImage(req.params.id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
};

export default locationController;
