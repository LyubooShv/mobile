import axios from 'axios';
import { API_MANAGE_CARS_URL } from './config';

export const api = {
  removeCar: async function(carId, userId, token){
      axios.delete(`${API_MANAGE_CARS_URL}${carId}/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
  })
}
};