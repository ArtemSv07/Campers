import { createSlice } from "@reduxjs/toolkit";
import { getCampers, getCampersById } from "./campersOps";
// import { selectContactFilter } from "./filtersSlice";

const handlePending = (state) => {
  state.error = null;
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    selectItem: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, handlePending)
      .addCase(getCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
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

export const selectItems = (state) => state.campers.items;
export const selectItem = (state) => state.campers.selectItem;
