import axios from 'axios';
import { API_LOGIN_URL } from './config';

export const api = {
  login: async function(username, password) {
    return axios.post(API_LOGIN_URL, {
        username,
        password,      
    });
  },
};