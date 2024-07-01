import axios from 'axios';
import cheerio from 'cheerio';
import { ProductDetails } from './gpt-types';

export async function scrapeData(url: string): Promise<ProductDetails> {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        // Adjust these selectors to match the structure of the page you are scraping
        const productName = $('meta[property="og:title"]').attr('content') || 'Unknown Product';
        const description = $('meta[name="description"]').attr('content') || 'No description available';
        const feature1 = $('.feature1-selector').text() || 'Feature 1';
        const feature2 = $('.feature2-selector').text() || 'Feature 2';
        const feature3 = $('.feature3-selector').text() || 'Feature 3';
        const targetAudience = 'General Audience'; // Update this based on available data
        const callToAction = 'Buy now to experience the difference!'; // Update this based on available data

        return {
            productName,
            description,
            feature1,
            feature2,
            feature3,
            targetAudience,
            callToAction
        };
    } catch (error) {
        console.error('Error scraping data:', error);
        throw new Error('Failed to scrape data');
    }
}
