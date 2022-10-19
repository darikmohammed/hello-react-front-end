import { createSlice } from '@reduxjs/toolkit';
import GetGreeting from './GetGreeting';

const initialState = {
  message: 'No Message Fetched. Please Wait...',
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {},
  extraReducers: {
    // Get Disney Characters
    [GetGreeting.fulfilled]: (state, action) => ({
      ...state,
      message: action.payload,
    }),
    [GetGreeting.rejected]: (state) => ({
      ...state,
    }),
  },
});

export default messageSlice.reducer;
