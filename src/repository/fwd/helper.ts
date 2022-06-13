import axios from 'axios'

export const fwdInstance = axios.create({
    baseURL: process.env.FWD_API,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'cache-control': 'no-cache',
        'Authorization': process.env.FWD_API_TOKEN,
      },
});
