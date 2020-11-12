import axios from 'axios';

export const authRequest = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

export const request = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

export const multiPartRequest = axios.create({
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});
