import { createSlice, } from '@reduxjs/toolkit'
import type { PayloadAction, } from '@reduxjs/toolkit'

import { CableInfo, } from '@/shared/types/cableCalculator/cableCalculator.types'


interface CableCalculatorState {
  groupValue: string | null
  subGroupValue: string | null
  lengthValue: string
  selectedCable: CableInfo | null
  totalWeight: number | null
}


const initialState: CableCalculatorState = {
  groupValue: null,
  subGroupValue: null,
  lengthValue: '',
  selectedCable: null,
  totalWeight: null,
}


export const cableCalculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setGroupValue: (state, action: PayloadAction<string>) => {
      state.groupValue = action.payload
    },

    setSubGroupValue: (state, action: PayloadAction<string>) => {
      state.subGroupValue = action.payload
    },

    setLengthValue: (state, action: PayloadAction<string>) => {
      state.lengthValue = action.payload
    },

    setSelectedCable: (state, action: PayloadAction<CableInfo>) => {
      state.selectedCable = action.payload
    },

    setTotalWeight: (state, action: PayloadAction<number>) => {
      state.totalWeight = action.payload
    },
  },
})


export const {
  setGroupValue,
  setSubGroupValue,
  setLengthValue,
  setSelectedCable,
  setTotalWeight,
} = cableCalculatorSlice.actions

export default cableCalculatorSlice.reducer
