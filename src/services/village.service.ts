import { GoogleGenerativeAI } from '@google/generative-ai';
import { v4 as uuidv4 } from 'uuid';

import locationRepository from '../repositories/location.repository';
import recommendationRepository from '../repositories/recommendation.repository';
import villageRepository from '../repositories/village.repository';
import { Location } from '../schemas/location';
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
  },
  getAnalysis: async (id: string) => {
    const locations = await locationRepository.getLocationsByVillageId(id);
    let prompt = '';
    locations.forEach((location: Location, idx: number) => {
      prompt += `${idx + 1}. Luas: ${location.area} m2, jenis tanaman: ${location.plant_type}, kelembapan: ${
        location.humidity
      }, pH tanah: ${location.soil_ph}, suhu: ${location.temperature}\n`;
    });
    prompt += `\nCalculate the estimated carbon captured (in kg) and its value (in USD) for the green area list (calculate as one location) under best-case assumptions. Return ONLY a JSON object with three keys: 'carbon_captured' (number for kg), 'carbon_value' (number for USD), and 'insight' (string summary). Use these assumptions:\n1. Carbon capture rate: 2.5 kg/m²/year\n2. Carbon price: $50/ton ($0.05/kg)\nDO NOT include explanations or extra text. DO IN Indonesian Language.`;

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'random');
    const geminiConfig = {
      temperature: 0.9,
      topP: 1,
      topK: 1,
      maxOutputTokens: 4096
    };
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.0-flash',
      ...geminiConfig
    });
    const res = await model.generateContent(prompt);
    if (!res.response || !res.response.candidates || res.response.candidates.length === 0) {
      throw new Error('No response from Gemini AI');
    }
    const raw = res.response.candidates[0].content.parts[0].text || '';
    const cleaned = raw
      .replace(/```json\s*([\s\S]*?)\s*```/, '$1') // extract content between ```json ... ```
      .trim();

    const parsed = JSON.parse(cleaned);
    // create recommendation
    const data = {
      id: uuidv4(),
      village_id: id,
      ...parsed
    };
    const resp = await recommendationRepository.createRecommendation(data);
    return resp;
  }
};

export default villageService;
