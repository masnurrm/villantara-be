import prisma from '../configs/database.connection';
import { User } from '../schemas/user';

const userRepository = {
  createUser: async (data: User) => {
    return await prisma.user.create({
      data
    });
  },
  findUserByEmail: async (email: string) => {
    return await prisma.user.findUnique({
      where: { email }
    });
  },
  updateUser: async (id: string, data: User) => {
    return await prisma.user.update({
      where: { id },
      data
    });
  },
  deleteUser: async (id: string) => {
    return await prisma.user.delete({
      where: { id }
    });
  }
};

export default userRepository;
