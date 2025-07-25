import { hash, compare } from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

import userRepository from '../repositories/user.repository';
import { User } from '../schemas/user';
import { generateToken } from '../utils/functions';

const userService = {
  register: async (data: User) => {
    const id = uuidv4();
    // Hash the password
    const hashedPassword = await hash(data.password, 10);
    return await userRepository.createUser({ ...data, id, password: hashedPassword });
  },
  login: async (email: string, password: string) => {
    const user = await userRepository.findUserByEmail(email);
    if (!user) {
      throw new Error('User not found');
    }
    // Compare the password with the hashed password
    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }
    return user;
  },
  update: async (id: string, data: User) => {
    return await userRepository.updateUser(id, data);
  },
  delete: async (id: string) => {
    return await userRepository.deleteUser(id);
  },
  generateToken: async (data: User) => {
    const token = await generateToken(data);
    // update user
    data.access_token = token;
    await userRepository.updateUser(data.id, data);
    return token;
  }
};

export default userService;
