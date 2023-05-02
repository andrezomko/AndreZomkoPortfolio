// https://redux.js.org/tutorials/fundamentals/part-8-modern-redux#using-configurestore
import { configureStore } from "@reduxjs/toolkit";
//Reducers functions
import homeReducer from "./pages/homeSlice";
import allProjectsReducer from "./pages/allProjectsSlice";

//creating redux store
export const store = configureStore({
  reducer: {
    home: homeReducer,
    allProjects: allProjectsReducer,
  },
});
