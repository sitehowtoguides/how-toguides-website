import axios from 'axios';

// Types for ConvertKit API requests
interface SubscribeToFormRequest {
  email: string;
  firstName?: string;
  fields?: Record<string, string>;
  tags?: number[];
}

interface AddTagRequest {
  email: string;
}

// ConvertKit API client
export const convertKitClient = {
  // Subscribe a user to a form
  async subscribeToForm(formId: string, data: SubscribeToFormRequest) {
    try {
      const response = await axios.post('/api/convertkit/subscribe', {
        formId,
        ...data
      });
      return response.data;
    } catch (error) {
      console.error('Error subscribing to form:', error);
      throw error;
    }
  },

  // Add a tag to a subscriber
  async addTag(tagId: string, data: AddTagRequest) {
    try {
      const response = await axios.post('/api/convertkit/add-tag', {
        tagId,
        ...data
      });
      return response.data;
    } catch (error) {
      console.error('Error adding tag:', error);
      throw error;
    }
  }
};
