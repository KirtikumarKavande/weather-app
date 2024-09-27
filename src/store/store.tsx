import { configureStore } from "@reduxjs/toolkit";
import forecastSlice from "./slices/forcastSlice";

const store=configureStore({
   reducer:{
    forecast:forecastSlice
   }

})

export default store