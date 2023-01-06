import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";
export interface Search {
  text: string;
}

const initialState: Search = {
  text: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,

  reducers: {
    update: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const { update } = searchSlice.actions;

export const selectSearch = (state: RootState) => state.search.text;

export default searchSlice.reducer;
