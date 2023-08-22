import axios from 'axios';

const Instance = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'api-key',
  },
});


export default Instance
