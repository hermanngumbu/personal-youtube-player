import axios from 'axios';

export const BASE_URL = process.env.REACT_APP_URL; 

const accessToken = localStorage.getItem('token')

const options = {
  params: {
    maxResults: 5,
  },
  headers: {
    Authorization: `Bearer  ${accessToken}`,
    Accept: 'application/json'
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
