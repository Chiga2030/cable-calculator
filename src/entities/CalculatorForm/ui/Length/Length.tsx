'use client'

import { Input, } from 'antd'
import { ChangeEvent, } from 'react'
import { useDispatch, } from 'react-redux'

import { setLengthValue, } from '@/shared/model/slices/cableCalculatorSlice/cableCalculatorSlice'


export const Length = () => {
  const dispatch = useDispatch()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setLengthValue(event.target.value))
  }


  return (
    <Input placeholder={ 'Длина' } type={ 'number' } addonAfter={ 'км' } onChange={ handleChange } />
  )
}
