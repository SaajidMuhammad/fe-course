import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
  },
  reducers: {
    setCategories: (state, actions) => {
      state.categories = actions.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
