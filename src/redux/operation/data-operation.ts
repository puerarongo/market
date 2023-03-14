import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../services/apiDataProducts";
import { Notify } from "notiflix/build/notiflix-notify-aio";

export const getData: any = createAsyncThunk(
  "data/getData",
  async (skip: string) => {
    try {
      const request = await axios.get(
        `${BASE_URL}products?limit=12&skip=${skip}`
      );
      return request.data;
    } catch (err: any) {
      Notify.failure(`${err.message}`);
      return;
    }
  }
);

export const getOneItem: any = createAsyncThunk(
  "data/getOneItem",
  async (id: string) => {
    try {
      const request = await axios.get(`${BASE_URL}products/${id}`);
      return request.data;
    } catch (err: any) {
      Notify.failure(`${err.message}`);
      return;
    }
  }
);
