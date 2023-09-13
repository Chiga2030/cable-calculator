'use client'

import { Select, } from 'antd'

import { setGroupValue, } from '@/shared/model/slices/cableCalculatorSlice'
import { useAppDispatch, } from '@/shared/model/store/hooks'
import { Option, } from '@/shared/types/cableCalculator/cableCalculator.types'


interface GroupProps {
  options: Option[]
}


export const Group = ({
  options,
}: GroupProps) => {
  const dispatch = useAppDispatch()

  const handleChange = (value: string) => {
    dispatch(setGroupValue(value))
  }

  return (
    <Select placeholder={ 'Группа маркаразмера' } showSearch options={ options } onChange={ handleChange } />
  )
}
