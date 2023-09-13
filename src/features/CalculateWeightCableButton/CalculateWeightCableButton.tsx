'use client'

import { Button, } from 'antd'
import { useDispatch, } from 'react-redux'

import { setTotalWeight, } from '@/shared/model/slices/cableCalculatorSlice/cableCalculatorSlice'
import { useAppSelector, } from '@/shared/model/store/hooks'


export const CalculateWeightCableButton = (): JSX.Element => {
  const selectedCable = useAppSelector(store => store.calculator.selectedCable)
  const lengthValue = useAppSelector(store => store.calculator.lengthValue)
  const dispatch = useDispatch()


  const handleClick = () => {
    if (selectedCable) {
      const weight = selectedCable.find(infoItem => /вес/.test(infoItem.name))?.value

      if (weight) {
        const totalWeight = weight * Number(lengthValue)

        dispatch(setTotalWeight(totalWeight))
      }
    }
  }

  return (
    <Button type={ 'primary' } onClick={ handleClick } disabled={ !selectedCable }>
      Рассчитать
    </Button>
  )
}
