import axios from 'axios';

const Instance = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': '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',
  },
});


export default Instance