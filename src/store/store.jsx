import { configureStore, createSlice } from "@reduxjs/toolkit";

const cryptoSlice = createSlice({
  name: "cryptodata",
  initialState: { data: [] }, // Initial state should be an empty array
  reducers: {
    setData: (state, action) => {
      state.data = action.payload; // Set the data to the payload
    },
  },
});

const store = configureStore({
  reducer: {
    cryptodata: cryptoSlice.reducer, // Add the cryptoSlice reducer to the store
  },
});

export const { setData } = cryptoSlice.actions;

export default store;
