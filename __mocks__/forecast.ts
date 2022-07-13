import { readFile } from 'fs';

const forecast = (url) => {
  return new Promise((resolve, reject) => {
    // Get userID from supplied url string
    const lastSlash = url.lastIndexOf('/');
    const city = url.substring(lastSlash + 1);
    // Load user json data from a file in de subfolder for mock data
    readFile(`./src/__mockData__/${city}.json`, 'utf8', (err, data) => {
      if (err) reject(err);
      // Parse the data as JSON and put in the key entity (just like the request library does)
      resolve({ entity: JSON.parse(data) });
    });
  });
};

export default forecast;
