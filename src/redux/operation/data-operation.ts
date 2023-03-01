import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, API_KEY } from "../../services/apiData";
//import { Notify } from "notiflix/build/notiflix-notify-aio";
//import { Report } from "notiflix/build/notiflix-report-aio";

export const getData: any = createAsyncThunk("data/getData", async () => {
  try {
    const request = await axios.get(
      `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
    );
    console.log("in redux", request);
    return request.data;
  } catch (err) {
    return console.error(err);
  }
});
