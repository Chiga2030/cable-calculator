import { CalculatorForm, } from '@/entities/CalculatorForm'
import { TotalWeightInfo, } from '@/entities/TotalWeightInfo'
import { CalculateWeightCableButton, } from '@/features/CalculateWeightCableButton'

import styles from './CableCalculator.module.css'


export const CableCalculator = (): JSX.Element => {
  return (
    <section className={ styles.wrapper }>
      <CalculatorForm actions={ { calculateButton: <CalculateWeightCableButton />, } } />

      <TotalWeightInfo />
    </section>
  )
}
