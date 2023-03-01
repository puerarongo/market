import axios from "axios";

export const BASE_URL = "https://api.themoviedb.org/3/";
export const API_KEY = "919e7089fba0d91b25ee4f566c9a4741";

export const getDetailData = async (id: String | undefined) => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response;
};
