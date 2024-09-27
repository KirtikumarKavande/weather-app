import { createSlice } from "@reduxjs/toolkit";

const forecastSlice = createSlice({
  name: "forecast",
  initialState: {
    forecast: {},
  },
  reducers: {
    setForecast: (state, action) => {
      state.forecast = action.payload;
    },
  },
});

export default forecastSlice.reducer;
export const { setForecast } = forecastSlice.actions;
