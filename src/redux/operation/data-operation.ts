import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../services/apiDataProducts";
import { Notify } from "notiflix/build/notiflix-notify-aio";

export const getData: any = createAsyncThunk("data/getData", async () => {
  try {
    const request = await axios.get(`${BASE_URL}products`);
    return request.data;
  } catch (err: any) {
    Notify.failure(`${err.message}`);
    return;
  }
});
