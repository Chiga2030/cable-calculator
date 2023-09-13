import { CableCalculator, } from '@/widgets/CableCalculator'

import styles from './MainPage.module.css'


export const MainPage = (): JSX.Element => {
  return (
    <main className={ styles.page }>
      <CableCalculator />
    </main>
  )
}
