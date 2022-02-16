import axios from "axios";
import { API_MANAGE_CARS_URL } from "./config";

export const api = {
  editCar: async function( token, user, data) {
  return axios.put(
    `${API_MANAGE_CARS_URL}${user.id}`,
    data,
      {
        headers: { Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
        },
      }
    );
  },
};