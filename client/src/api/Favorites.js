import axios from 'axios';

export const requestFavorites = async () => {
  let response;
  try {
    response = await axios.get('/favorites');
  } catch (err) {
    if (err.response.status === 403) {
      throw new Error('Error in retriving favorites');
    }
  }
  return response.data[0];
};

export const addFavorites = async (favoritesList) => {
  let response;
  try {
    response = await axios.patch('/favorites', { favoritesList });
  } catch (err) {
    if (err.response.status === 403) {
      throw new Error('Error in retriving favorites');
    }
  }
  return response.data;
};

export const addFavoritesCategory = async (newFavoritesList) => {
  let response;
  try {
    response = await axios.post('/favorites', { newFavoritesList });
  } catch (err) {
    if (err.response.status === 403) {
      throw new Error('Error in retriving favorites');
    }
  }
  return response.data;
};
