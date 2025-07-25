import prisma from '../configs/database.connection';
import { Recommendation } from '../schemas/recommendation';

const recommendationRepository = {
  createRecommendation: async (data: Recommendation) => {
    return await prisma.recommendation.create({
      data
    });
  },
  getRecommendations: async () => {
    return await prisma.recommendation.findMany();
  },
  updateRecommendation: async (id: string, data: Partial<Recommendation>) => {
    return await prisma.recommendation.update({
      where: { id },
      data
    });
  },
  deleteRecommendation: async (id: string) => {
    return await prisma.recommendation.delete({
      where: { id }
    });
  }
};

export default recommendationRepository;
