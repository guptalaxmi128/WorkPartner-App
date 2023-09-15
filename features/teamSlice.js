import { createSlice } from '@reduxjs/toolkit';

const teamSlice = createSlice({
  name: 'teamSlice',
  initialState: [],
  reducers: {
    setTeamArray: (state, action) => {
      return action.payload;
    }
  }
});

export const { setTeamArray } = teamSlice.actions;
export default teamSlice.reducer;
