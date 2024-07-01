import openaiAPI from '../openai';
import { scrapeData } from './scraper'; 
import { ProductDetails } from './gpt-types'; 

const systemPrompt = `
Create a promotional script. Start with an intriguing opening that captures attention. 
Introduce {ProductName}, a {BriefDescription}. Highlight three main features: {Feature1}, 
{Feature2}, and {Feature3}. Discuss the benefits: how {Feature1} enriches the user's experience, 
the appeal of {Feature2}, and the lifestyle enhancement from {Feature3}. Address a common problem and how 
{ProductName} offers a unique solution. Tailor the message to appeal to {TargetAudience}, 
urging them to {CallToAction}. Conclude with a powerful recap of the product's benefits and a strong closing statement.`

class GptService {
  async generatePromotionalScript(input: string): Promise<string | null> {
    try {
      let contentDetails;

      // Check if input is a URL and scrape content; otherwise, assume it's direct text with details
      if (this.isValidUrl(input)) {
        // Scrape content from the URL to get details like ProductName, Feature1, etc.
        contentDetails = await scrapeData(input); // Assume scrapeData returns an object with necessary details
      } else {
        // Directly parse the input assuming it's JSON with necessary details
        contentDetails = JSON.parse(input);
      }

      // Replace placeholders in the template with actual data from contentDetails
      const fullPrompt = systemPrompt.replace(/\{ProductName\}/g, contentDetails.productName)
        .replace(/\{BriefDescription\}/g, contentDetails.description)
        .replace(/\{Feature1\}/g, contentDetails.feature1)
        .replace(/\{Feature2\}/g, contentDetails.feature2)
        .replace(/\{Feature3\}/g, contentDetails.feature3)
        .replace(/\{TargetAudience\}/g, contentDetails.targetAudience)
        .replace(/\{CallToAction\}/g, contentDetails.callToAction);

      // Make a request to OpenAI's Completion API
      const response = await openaiAPI.post('/completions', {
        model: 'gpt-4o',
        prompt: fullPrompt,
        max_tokens: 500
      });

      // Extract and return the generated text
      return response.data.choices[0].text;
    } catch (e: any) {
      console.error('Error in generatePromotionalScript:', e.message);
      return null;
    }
  }

  private isValidUrl(string: string): boolean {
    try {
      new URL(string);
      return true;
    } catch (e) {
      return false;
    }
  }
}

export default GptService;
