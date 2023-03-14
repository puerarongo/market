import { createReducer } from "@reduxjs/toolkit";
import { getData, getOneItem } from "../operation/data-operation";

const dataReducer = createReducer([], {
  [getData.fulfilled]: (_: any, { payload }: any) => payload,
  [getOneItem.fulfilled]: (_: any, { payload }: any) => payload,
});

export default dataReducer;
