import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  status: "idle",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
});

export const {} = counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
