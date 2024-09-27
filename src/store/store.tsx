import { configureStore } from "@reduxjs/toolkit";
import forecastSlice from "./slices/forcastSlice";
import unitToggleSlice from "./slices/unitToggleSlice";

const store=configureStore({
   reducer:{
    forecast:forecastSlice,
    unitToggle:unitToggleSlice
   }

})

export default store