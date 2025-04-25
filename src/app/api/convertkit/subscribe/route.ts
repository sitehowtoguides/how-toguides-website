import axios from 'axios';

// Server-side API route handler for ConvertKit form subscriptions
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { formId, email, firstName, fields, tags } = req.body;

  if (!email || !formId) {
    return res.status(400).json({ message: 'Email and formId are required' });
  }

  try {
    // Prepare request data
    const requestData = {
      api_key: process.env.CONVERTKIT_API_KEY,
      email,
    };

    // Add optional fields if provided
    if (firstName) requestData.first_name = firstName;
    if (fields) requestData.fields = fields;
    if (tags) requestData.tags = tags;

    // Make request to ConvertKit API
    const response = await axios.post(
      `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
      requestData
    );

    return res.status(200).json(response.data);
  } catch (error) {
    console.error('ConvertKit API error:', error.response?.data || error.message);
    return res.status(500).json({ 
      message: 'Error subscribing to newsletter',
      error: error.response?.data || error.message
    });
  }
}
