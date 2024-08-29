import axios from 'axios';

// List of URLs to keep alive
const urls = [
  'https://mern-blog-59mo.onrender.com/api/user',  // Replace with your first app URL
  'https://int9solutions-assignment-1.onrender.com',         // Replace with your second app URL
  'https://bytive-assignment3-1kcr.onrender.com',       // Replace with your third app URL
  // Add more URLs as needed
];

// Define the Keep-Alive function for multiple URLs
const keepAlive = async () => {
  for (const url of urls) {
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        console.log(`Keep-alive ping to ${url} successful.`);
      } else {
        console.log(`Unexpected status code from ${url}: ${response.status}`);
      }
    } catch (error) {
      console.error(`Error in keep-alive ping to ${url}: ${error.message}`);
    }
  }
};

// Set an interval to ping the servers every 5 minutes (300,000 ms)
setInterval(keepAlive, 300000);

console.log('Keep-Alive service started, pinging servers...');