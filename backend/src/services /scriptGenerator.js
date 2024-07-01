function generateScript(productInfo) {
    const scriptTemplate = `Create a promotional script. Start with an intriguing opening that captures attention. Introduce ${productInfo.productName}, a brief description. Highlight three main features: ${productInfo.features}. Discuss the benefits: how Feature 1 enriches the user's experience, the appeal of Feature 2, and the lifestyle enhancement from Feature 3. Address a common problem and how ${productInfo.productName} offers a unique solution. Tailor the message to appeal to Target Audience, urging them to Call to Action. Conclude with a powerful recap of the product's benefits and a strong closing statement.`;
    return scriptTemplate;
}

exports.generateScript = generateScript;
