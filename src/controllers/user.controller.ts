import { Request, Response, NextFunction } from 'express';

import userService from '../services/user.service';

export const userController = {
  register: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData = req.body;
      const newUser = await userService.register(userData);
      res.status(201).json({
        status: String(res.statusCode),
        data: newUser
      });
    } catch (error) {
      next(error);
    }
  },
  login: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      const user = await userService.login(email, password);
      if (!user) {
        return res.status(404).json({
          status: String(res.statusCode),
          message: 'User not found'
        });
      }
      const token = await userService.generateToken(user);
      res.status(200).json({
        status: String(res.statusCode),
        data: user,
        token
      });
    } catch (error) {
      next(error);
    }
  },
  update: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.params.id;
      const userData = req.body;
      const updatedUser = await userService.update(userId, userData);
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  },
  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.params.id;
      const deletedUser = await userService.delete(userId);
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
};

export default userController;
