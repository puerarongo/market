import { createReducer } from "@reduxjs/toolkit";
import { getData } from "../operation/data-operation";

const dataReducer = createReducer([], {
  [getData.fulfilled]: (_: any, { payload }: any) => payload,
});

export default dataReducer;
