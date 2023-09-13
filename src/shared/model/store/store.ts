import { configureStore, } from '@reduxjs/toolkit'

import cableCalculatorSlice from '../slices/cableCalculatorSlice'


export const store = configureStore({
  reducer: {
    calculator: cableCalculatorSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
