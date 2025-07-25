import { Router } from 'express';

import villageController from '../controllers/village.controller';

const villageRouter = Router();

villageRouter.get('/', villageController.getAllVillages);
villageRouter.post('/', villageController.createVillage);
villageRouter.get('/:id', villageController.findVillageById);
villageRouter.put('/:id', villageController.updateVillage);
villageRouter.delete('/:id', villageController.deleteVillage);
villageRouter.get('/:id/analysis', villageController.getAnalysis);

export default villageRouter;
