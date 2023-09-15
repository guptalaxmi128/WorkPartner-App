import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { signUpApi } from '../services/signUpApi'
import authReducer from  '../features/authSlice'
import userReducer from "../features/userSlice"
import teamReducer from '../features/teamSlice'
export const store = configureStore({
  reducer: {
    [signUpApi .reducerPath]: signUpApi .reducer,
    auth : authReducer,
    user: userReducer,
  },
 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(signUpApi .middleware),
})


setupListeners(store.dispatch)