import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();
console.log('Loaded API Key:', process.env.OPENAI_API_KEY); // Ensure the API key is loaded correctly

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export default openai;
