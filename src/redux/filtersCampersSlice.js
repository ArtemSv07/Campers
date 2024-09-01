import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const filterCampersSlice = createSlice({
  name: "filterCampers",
  initialState: {
    items: {},
    likeItems: [],
    likesToggle: false,
  },
  reducers: {
    addFilter(state, action) {
      state.items = action.payload;
    },
    addLikes(state, action) {
      state.likeItems.push(action.payload);
    },
    deleteLikes(state, action) {
      state.likeItems = state.likeItems.filter(
        (elem) => elem !== action.payload
      );
    },
    addToggle(state, action) {
      state.likesToggle = action.payload;
    },
  },
});

export const { addFilter } = filterCampersSlice.actions;
export const { addLikes } = filterCampersSlice.actions;
export const { deleteLikes } = filterCampersSlice.actions;
export const { addToggle } = filterCampersSlice.actions;

export default filterCampersSlice.reducer;

const selectFilterCampers = (state) => state.filterCampers;
export const selectItemsCampers = createSelector(
  [selectFilterCampers],
  (filterCampers) => filterCampers.items
);

export const selectLikeItems = createSelector(
  [selectFilterCampers],
  (filterCampers) => filterCampers.likeItems
);

export const selectLikeToggle = createSelector(
  [selectFilterCampers],
  (filterCampers) => filterCampers.likesToggle
);
