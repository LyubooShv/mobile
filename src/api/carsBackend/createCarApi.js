import axios from 'axios';
import { API_MANAGE_CARS_URL } from './config';

export const api = {
    createCar: async function(token,data,user){
      const createdCar = {...data,user}
   return (
        axios.post(
        API_MANAGE_CARS_URL,
        createdCar ,
        { headers: { Authorization: `Bearer ${token}` } }
      ))
} }