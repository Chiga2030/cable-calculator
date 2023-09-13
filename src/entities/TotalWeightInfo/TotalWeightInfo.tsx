'use client'

import { Statistic, } from 'antd'

import { useAppSelector, } from '@/shared/model/store/hooks'


export const TotalWeightInfo = (): JSX.Element => {
  const totalWeight = useAppSelector(store => store.calculator.totalWeight)


  return (
    <>
      { typeof totalWeight === 'number' && (
        <>
          <Statistic title="Вес кабеля (кг)" value={ totalWeight } />
        </>
      ) }
    </>
  )
}
