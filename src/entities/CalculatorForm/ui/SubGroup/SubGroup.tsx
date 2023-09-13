'use client'

import { Select, } from 'antd'

// eslint-disable-next-line import/extensions
import weightsJson from '@/shared/constants/mockResponses/weights.json'
import { setSubGroupValue, } from '@/shared/model/slices/cableCalculatorSlice'
import { setSelectedCable, } from '@/shared/model/slices/cableCalculatorSlice/cableCalculatorSlice'
import { useAppDispatch, useAppSelector, } from '@/shared/model/store/hooks'
import { Weights, } from '@/shared/types/cableCalculator/cableCalculator.types'

import { getSubGroupOptions, } from '../../lib/utils/getSubGroupOptions'


const weights = weightsJson as Weights


export const SubGroup = () => {
  const groupValue = useAppSelector(state => state.calculator.groupValue)
  const dispatch = useAppDispatch()

  const options = groupValue ? getSubGroupOptions(weights, groupValue) : []

  const handleChange = (value: string) => {
    if (groupValue) {
      dispatch(setSubGroupValue(value))
      dispatch(setSelectedCable(weights[ groupValue ][ value ]))
    }
  }


  return (
    <Select
      showSearch
      placeholder={ 'Подгруппа маркаразмера' }
      disabled={ !groupValue }
      options={ options }
      onChange={ handleChange }
    />
  )
}
