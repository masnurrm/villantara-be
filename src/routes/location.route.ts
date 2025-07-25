import { Router } from 'express';

import locationController from '../controllers/location.controller';

const locationRouter = Router();

locationRouter.get('/', locationController.getAllLocations);
locationRouter.post('/', locationController.createLocation);
locationRouter.get('/:id', locationController.findLocationById);
locationRouter.put('/:id', locationController.updateLocation);
locationRouter.delete('/:id', locationController.deleteLocation);
locationRouter.post('/:id/images', locationController.addImage);
locationRouter.delete('/images/:id', locationController.deleteImage);

export default locationRouter;
