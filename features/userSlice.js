import { createSlice } from "@reduxjs/toolkit";

const initialState ={
  name:'',
  mobileNumber:'',
  email:''
  
}

const userSlice = createSlice({
    name: 'user_info',
    initialState,
    reducers: {
      setUserInfo: (state, action ) => {
        state.name=action.payload.name,
        state.mobileNumber = action.payload.mobileNumber;
        state.email=action.payload.email;
      },
      unsetUserInfo: (state) => {
        state.name='',
        state.mobileNumber=''
        state.email=''
      },
    },
  });

  export const { setUserInfo,unsetUserInfo} = userSlice.actions;
  export default userSlice.reducer;