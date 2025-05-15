import axios from 'axios';
import directus from '../lib/directus'

export const api = axios.create({
  baseURL: 'http://localhost:8055',
});
// const BASE_URL = 'http://localhost:8055/';

// export const fetchPosts = async () => {
//   const response = await axios.get(BASE_URL);
//   return response.data;
// };

// export const createPost = async (postData) => {
//   const response = await axios.post(BASE_URL, postData);
//   return response.data;
// };

async function createPost(title, content) {
  await directus.request({
    method: 'POST',
    url: '/items/posts',
    data: { title, content },
  });
}

async function fetchPosts() {
  const response = await directus.request({
    method: 'GET',
    url: '/items/posts',
  });
  return response.data;
}