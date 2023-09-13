import { Option, } from '@/shared/types/cableCalculator/cableCalculator.types'


export const toOptionItemsConvertor = (data: string[]): Option[] => {
  return data.map(groupName => ({
    label: groupName,
    value: groupName,
  }))
}
