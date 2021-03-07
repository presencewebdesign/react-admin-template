export const ADD_EVENT: string = "ADD_EVENT"

export function addEvent(date: Date): IAddEventActionType {
   return { type: ADD_EVENT, date: date }
}

interface IAddEventActionType {
   type: string
   date: Date
}
