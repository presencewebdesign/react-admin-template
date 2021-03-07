export interface ICardProperties {
   statistic: {
      id: number
      title: string
      isPercent: boolean
      description: string
      value: string
      results: {
         id: number
         title: string
         isPercent: boolean
         value: string
      }[]
   }
}
