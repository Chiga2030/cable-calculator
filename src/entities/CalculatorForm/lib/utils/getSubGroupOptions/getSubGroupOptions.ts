import { Weights, } from '@/shared/types/cableCalculator/cableCalculator.types'

import { toOptionItemsConvertor, } from '../toOptionItemsConvertor'


export const getSubGroupOptions = (object: Weights, key: string | undefined) => {
  if (key) {
    const optionKeys = Object.keys(object[ key ])

    return toOptionItemsConvertor(optionKeys)
  } return []
}
