import axios from 'axios';

// Server-side API route handler for adding tags to ConvertKit subscribers
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { tagId, email } = req.body;

  if (!email || !tagId) {
    return res.status(400).json({ message: 'Email and tagId are required' });
  }

  try {
    // Make request to ConvertKit API
    const response = await axios.post(
      `https://api.convertkit.com/v3/tags/${tagId}/subscribe`,
      {
        api_key: process.env.CONVERTKIT_API_KEY,
        email
      }
    );

    return res.status(200).json(response.data);
  } catch (error) {
    console.error('ConvertKit API error:', error.response?.data || error.message);
    return res.status(500).json({ 
      message: 'Error adding tag to subscriber',
      error: error.response?.data || error.message
    });
  }
}
