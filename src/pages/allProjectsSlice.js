//REDUX to fetch the github repo

//simplify and streamline the process of creating Redux slices, which are self-contained pieces of Redux store configuration:

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// Data
import { githubUsername, projectCardImages } from "../data";

///initial state object for the Redux slice:
const initialState = {
  error: "",
  isLoading: true,
  data: [],
};

export const url = `https://api.github.com/users/${githubUsername}/repos?per_page=100`;

// THUNK:
// function that is used as an action creator to dispatch asynchronous actions. Thunks are a middleware in Redux that allow you to write asynchronous logic, such as fetching data from an API or performing side effects, in your Redux store. 2 args: string that represents the name of the thunk action, and an async function that contains the asynchronous logic.
// A thunk is a higher-order function that returns another function, which can be called with the Redux store's dispatch and getState functions as arguments. This inner function can then perform asynchronous operations and dispatch regular Redux actions with the dispatch function. Thunks provide a way to handle asynchronous actions in a more organized and manageable manner within the Redux ecosystem.
// In Redux, thunks are commonly used with libraries like Redux Thunk or Redux Saga to handle asynchronous actions in a Redux application. Thunks provide a flexible and convenient way to handle asynchronous logic while maintaining the unidirectional data flow and state management principles of Redux
//this thunk action has 3 states: pending fullfiled and rejected

export const fetchGitHubReops = createAsyncThunk(
  "allProjects/fetchGitHubReops", //name of the Thunk action arg1 "{sliceName}/{actionName}"
  async (thunkApi, { rejectWithValue }) => { //async logic arg2 //   thunkApi: thunkApi is an object that contains various properties and methods related to the thunk action. It includes properties like getState to access the current Redux state, dispatch to dispatch other actions, and extra to access any extra argument passed to the thunk.
    // { rejectWithValue }: rejectWithValue is a function provided by createAsyncThunk that allows you to return a rejected action with a specified value. It's useful for handling error cases in async logic.
      try {
        const response = await fetch(url).then(function (res) { 
          if (!res.ok) {
            throw new Error(res.status);
          }
          return res;
        });
        const data = await response.json();
        return data;
      } catch (err) {
        return rejectWithValue(
          `Error: ${err.message}, check username in data.js (currently ${githubUsername})`
        );
      }
    }
);

//redux slice - createSilce function(obj)
export const allProjectsSlice = createSlice({
    //obj properties:
  name: "allProjects",
  initialState,
        //function for aditional actions: arrow function with a builder argument
  extraReducers: (builder) => {
    builder
        //builder actions:
      .addCase(fetchGitHubReops.pending, (state) => {  //fetchGitHubReops.pending: This action is triggered when an asynchronous request to fetch GitHub repositories is pending. It updates the isLoading state to true and clears the error state.
        state.isLoading = true;
        state.error = "";
      })
      .addCase(fetchGitHubReops.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload; //passing the payload (data to be processed) action to the data state in the redux store
        projectCardImages.forEach(function (element) { //updating image prop of each el in the state.data w/ the corresp img value from projectCardIMages
          state.data.forEach((el, i) => {
            if (element.name.toLowerCase() === el.name.toLowerCase()) {
              el.image = element.image;
            }
          });
        });
      })
      .addCase(fetchGitHubReops.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.log(state.error);
      });
  },
});
//defining selectors for the redux store
export const selectIsLoading = (state) => state.allProjects.isLoading; //returns the value of the is loading property
export const selectError = (state) => state.allProjects.error; //return error form allProjects slice
export const selectData = (state) => state.allProjects.data;

export default allProjectsSlice.reducer;

