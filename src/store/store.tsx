import { configureStore } from "@reduxjs/toolkit";
import forecastSlice from "./slices/forcastSlice";
import weatherSettings from "./slices/unitToggleSlice";

const store=configureStore({
   reducer:{
    forecast:forecastSlice,
    weatherSettings:weatherSettings
   }

})

export default store