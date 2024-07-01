import express from 'express';
import { scrapeData } from './scraper';
import { ProductDetails } from './gpt-types';
import openaiClient from './openaiClient'; // Ensure correct path and import
import dotenv from 'dotenv';
import OpenAI from 'openai'; // Correct import

dotenv.config();
const router = express.Router();

type ChatCompletionRequestMessage = {
    role: "system" | "user" | "assistant";
    content: string;
};

router.post('/generate-promotion', async (req, res) => {
    const { input } = req.body;

    try {
        let productDetails: ProductDetails;

        // Use a try-catch block specifically for parsing in case of invalid JSON input
        try {
            if (isValidUrl(input)) {
                console.log("Scraping data from URL:", input);
                productDetails = await scrapeData(input);
                console.log("Scraped product details:", productDetails);
            } else {
                console.log("Parsing JSON input:", input);
                productDetails = JSON.parse(input);
                console.log("Parsed product details:", productDetails);
            }
        } catch (parseError) {
            console.error('Error parsing input or scraping data:', parseError);
            return res.status(400).json({ 
                message: "Invalid input or failed scraping", 
                error: parseError instanceof Error ? parseError.message : 'Unknown error' 
            });
        }

        const requiredFields = ['productName', 'description', 'feature1', 'feature2', 'feature3', 'targetAudience', 'callToAction'];
        for (const field of requiredFields) {
            if (!productDetails[field]) {
                console.log(`Missing field: ${field}`);
                return res.status(400).json({ message: `Missing field: ${field}` });
            }
        }

        const messages: ChatCompletionRequestMessage[] = [
            {
                role: "system",
                content: `Create a promotional script. Start with an intriguing opening that captures attention.
                Introduce ${productDetails.productName}, a ${productDetails.description}. Highlight three main features:
                ${productDetails.feature1}, ${productDetails.feature2}, and ${productDetails.feature3}. Discuss the benefits:
                how ${productDetails.feature1} enriches the user's experience, the appeal of ${productDetails.feature2},
                and the lifestyle enhancement from ${productDetails.feature3}. Address a common problem and how
                ${productDetails.productName} offers a unique solution. Tailor the message to appeal to
                ${productDetails.targetAudience}, urging them to ${productDetails.callToAction}.
                Conclude with a powerful recap of the product's benefits and a strong closing statement.`,
            },
        ];

        console.log("Generated messages:", messages);

        const scriptResponse = await openaiClient.chat.completions.create({
            model: "gpt-4",
            messages: messages,
            max_tokens: 500
        });

        console.log("OpenAI response:", scriptResponse);

        res.json({ script: scriptResponse.choices[0].message.content });
    } catch (error) {
        console.error('Error generating promotional script:', error);
        res.status(500).json({ message: 'Failed to generate script', error: error instanceof Error ? error.message : 'Unknown error' });
    }
});

function isValidUrl(string: string): boolean {
    try {
        new URL(string);
        return true;
    } catch (e) {
        return false;
    }
}

export default router;
