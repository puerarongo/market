import axios from "axios";

export const BASE_URL = "https://dummyjson.com/";

export const getDetailProducts = async (id: string) => {
  const response = await axios.get(`${BASE_URL}products/${id}`);
  return response;
};
