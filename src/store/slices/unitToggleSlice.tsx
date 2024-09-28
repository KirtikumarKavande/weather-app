import { createSlice } from "@reduxjs/toolkit";

const weatherSettings = createSlice({
  name: "forecast",
  initialState: {
    weatherUnit: "C",
    dayIndex:0
  },

  reducers: {
    setActiveUnit: (state, action) => {
      state.weatherUnit = action.payload;
    },
    setDayIndex: (state, action) => {
      state.dayIndex = action.payload;
    },
  },
});

export default weatherSettings.reducer;
export const { setActiveUnit,setDayIndex } = weatherSettings.actions;
