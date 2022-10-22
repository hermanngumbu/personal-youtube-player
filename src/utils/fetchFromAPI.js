import axios from 'axios';

export const BASE_URL = 'https://youtube.googleapis.com/youtube/v3';

const accessToken = localStorage.getItem('token')

const options = {
  params: {
    maxResults: 5,
  },
  headers: {
    Authorization: `Bearer + ${accessToken}`,
    Accept: 'application/json'
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
