import axios from 'axios';

export default async (id = null) => {
  let response;
  if (id) {
    response = await axios.get('/listing', { query: { id } });
    return response.data[0];
  }
  response = await axios.get('/listing');
  return response.data[0];
};
