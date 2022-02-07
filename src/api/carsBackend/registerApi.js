import axios from 'axios';
import { API_REGISTER_URL } from './config';

export const api = {
  register: async function(username, password) {
    return axios.post(API_REGISTER_URL, {
        username,
        password,
        firstName:"",
        lastName:""            
    });
  },
};