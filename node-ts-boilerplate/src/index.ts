import express from 'express';
import dotenv from 'dotenv';
import gptRouter from './gpt/gpt-router';

// Load environment variables from the .env file
dotenv.config();
console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY); // Debugging log to ensure API key is loaded

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Use express.json() middleware to parse JSON bodies

// Prefix all routes defined in gptRouter with `/api/v1/gpt`
app.use('/api/v1/gpt', gptRouter);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
