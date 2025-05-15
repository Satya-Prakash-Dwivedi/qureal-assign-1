import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const createPost = async (postData) => {
  const response = await axios.post(BASE_URL, postData);
  return response.data;
};