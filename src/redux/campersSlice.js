import { createSlice } from "@reduxjs/toolkit";
import { getCampers, getCampersById } from "./campersOps";

const handlePending = (state) => {
  state.error = null;
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
  state.items = [];
};

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    selectItem: null,
    totalItems: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, handlePending)
      .addCase(getCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
        state.totalItems = action.payload.total;
      })
      .addCase(getCampers.rejected, handleRejected)

      .addCase(getCampersById.pending, handlePending)
      .addCase(getCampersById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectItem = action.payload;
      })
      .addCase(getCampersById.rejected, handleRejected);
  },
});

export default campersSlice.reducer;
