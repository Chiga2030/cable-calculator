export type CableInfo = {
  name: string
  value: number
  unit: string
}[]


export type Weights = {
  [ key: string ]: {
    [ key: string ]: CableInfo
  }
}


export type Option = {
  label: string
  value: string
}
