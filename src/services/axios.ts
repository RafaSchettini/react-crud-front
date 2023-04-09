import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://fastify-crud-deploy-api.onrender.com'
});
