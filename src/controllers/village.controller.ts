import { Request, Response, NextFunction } from 'express';

import villageService from '../services/village.service';

const villageController = {
  getAllVillages: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const villages = await villageService.getAllVillages();
      res.status(200).json({
        status: String(res.statusCode),
        data: villages
      });
    } catch (error) {
      next(error);
    }
  },
  createVillage: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const village = await villageService.createVillage(req.body);
      res.status(201).json(village);
    } catch (error) {
      next(error);
    }
  },
  findVillageById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const village = await villageService.findVillageById(req.params.id);
      if (!village) {
        return res.status(404).json({ message: 'Village not found' });
      }
      res.status(200).json({
        status: String(res.statusCode),
        data: village
      });
    } catch (error) {
      next(error);
    }
  },
  updateVillage: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const village = await villageService.updateVillage(req.params.id, req.body);
      if (!village) {
        return res.status(404).json({ message: 'Village not found' });
      }
      res.json(village);
    } catch (error) {
      next(error);
    }
  },
  deleteVillage: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await villageService.deleteVillage(req.params.id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  },
  getAnalysis: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const analysis = await villageService.getAnalysis(req.params.id);
      res.status(200).json({
        status: String(res.statusCode),
        data: analysis
      });
    } catch (error) {
      next(error);
    }
  }
};

export default villageController;
