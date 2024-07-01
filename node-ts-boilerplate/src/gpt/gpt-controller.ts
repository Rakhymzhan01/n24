// src/gpt/gpt-controller.ts
import { Request, Response } from 'express';
import openaiAPI from '../openai';

export const chatWithGPT = async (req: Request, res: Response) => {
  try {
    const { prompt } = req.body;
    const response = await openaiAPI.post('/chat/completions', {
      model: "gpt-4o",
      messages: [{role: "user", content: prompt}]
    });
    res.json(response.data);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
