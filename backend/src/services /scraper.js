const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeProductInfo(url) {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const productName = $('h1.product-name').text(); // Adjust selector based on actual site
    const features = $('.features').text(); // Adjust selector based on actual site

    return { productName, features };
}

exports.scrapeProductInfo = scrapeProductInfo;
