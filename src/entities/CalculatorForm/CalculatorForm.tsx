import { ReactNode, } from 'react'

// eslint-disable-next-line import/extensions
import weightsJson from '@/shared/constants/mockResponses/weights.json'
import { Weights, } from '@/shared/types/cableCalculator/cableCalculator.types'

import styles from './CalculatorForm.module.css'
import { toOptionItemsConvertor, } from './lib/utils/toOptionItemsConvertor'
import { Group, } from './ui/Group'
import { Length, } from './ui/Length'
import { SubGroup, } from './ui/SubGroup'


const weights = weightsJson as Weights

const group = toOptionItemsConvertor(Object.keys(weights))


interface Props {
  actions: {
    calculateButton: ReactNode
  }
}

export const CalculatorForm = ({
  actions,
}: Props): JSX.Element => {
  const { calculateButton, } = actions


  return (
    <div className={ styles.wrapper }>
      <Group options={ group } />

      <SubGroup />

      <Length />

      { calculateButton }
    </div>
  )
}
