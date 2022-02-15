import axios from 'axios';
import { API_GET_CARS_URL } from './config';

export const api = {
  cars : async function() {
    return axios.get(API_GET_CARS_URL);
  },
};