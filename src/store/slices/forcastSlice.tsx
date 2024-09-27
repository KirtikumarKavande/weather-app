import { createSlice } from "@reduxjs/toolkit";

const forecastSlice = createSlice({
  name: "forecast",
  initialState: {
    weatherForecast: {},
  },
  reducers: {
    setForecast: (state, action) => {
      state.weatherForecast = action.payload;
    },
  },
});

export default forecastSlice.reducer;
export const { setForecast } = forecastSlice.actions;
