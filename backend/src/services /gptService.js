const axios = require('axios');

const openAIKey = process.env.OPENAI_API_KEY;  // Ensure your API key is stored in the .env file

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${openAIKey}`
};

async function generatePromotionalScript(productInfo) {
    const prompt = `Create a promotional script. Start with an intriguing opening that captures attention. Introduce ${productInfo.productName}, a brief description. Highlight three main features: ${productInfo.features}. Discuss the benefits: how Feature 1 enriches the user's experience, the appeal of Feature 2, and the lifestyle enhancement from Feature 3. Address a common problem and how ${productInfo.productName} offers a unique solution. Tailor the message to appeal to Target Audience, urging them to Call to Action. Conclude with a powerful recap of the product's benefits and a strong closing statement.`;

    try {
        const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
            prompt: prompt,
            max_tokens: 150
        }, { headers: headers });

        return response.data.choices[0].text;
    } catch (error) {
        console.error('Error calling OpenAI to generate script:', error);
        throw error;
    }
}

exports.generatePromotionalScript = generatePromotionalScript;
