const express = require('express');
const router = express.Router();
const { scrapeProductInfo } = require('../services/scraper');
const { generatePromotionalScript } = require('../services/gptService');

router.post('/generate-script', async (req, res) => {
    try {
        const url = req.body.url;
        const productInfo = await scrapeProductInfo(url);
        const script = await generatePromotionalScript(productInfo);
        res.json({ script });
    } catch (error) {
        res.status(500).json({ error: 'Error generating script' });
    }
});

module.exports = router;
