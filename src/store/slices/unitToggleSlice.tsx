import { createSlice } from "@reduxjs/toolkit";

const unitToggleSlice = createSlice({
  name: "forecast",
  initialState: {
    weatherUnit: "C",
  },
  reducers: {
    setActiveUnit: (state, action) => {
      state.weatherUnit = action.payload;
    },
  },
});

export default unitToggleSlice.reducer;
export const { setActiveUnit } = unitToggleSlice.actions;
