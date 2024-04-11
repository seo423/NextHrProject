// third-party
import { createSlice } from '@reduxjs/toolkit';

type positionList = { positionList: any[]; };

let initialState: positionList = { positionList: []};

const positionSlice = createSlice({
  name: 'position',
  initialState,
  reducers: {
    POSITION_LIST_SEARCH_FETCH_REQUESTED(state, action) {
      console.log("This is Reducer!! POSITION_LIST_SEARCH_FETCH_REQUESTED called!!!");
    },

    // GET POSITION
    POSITION_LIST_SEARCH_FETCH_STATUS(state, action) {
      console.log("This is Reducer!! POSITION_LIST_SEARCH_FETCH_STATUS called!!!");
      state.positionList = action.payload;
   
    }
  }
});

export const positionAction = positionSlice.actions;

export default positionSlice.reducer;
