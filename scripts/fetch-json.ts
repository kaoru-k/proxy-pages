import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

// Get URL from environment variable
const url = process.env.FETCH_URL;

// Fetch JSON data and save it to a file
async function fetchAndSaveJson() {
    try {
        if (!url) {
            console.error('URL is not specified.');
            process.exit(1);
        }
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const outputDir = path.resolve(__dirname, '../outputs');
        const outputPath = path.join(outputDir, 'data.json');

        // Create output directory if it does not exist
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        // Save JSON data
        fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
        console.log(`JSON data saved to ${outputPath}`);
    } catch (error) {
        console.error('Error: ', error);
    }
}

fetchAndSaveJson();
