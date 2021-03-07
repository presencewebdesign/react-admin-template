import { IActionBase, IEventState } from "../models/root.interface"
import { ADD_EVENT } from "../actions/events.actions"

const initialState: IEventState = {
   date: new Date(),
}

function eventReducer(
   state: IEventState = initialState,
   action: IActionBase
): IEventState {
   switch (action.type) {
      case ADD_EVENT: {
         return { ...state, date: action.date }
      }

      default:
         return state
   }
}

export default eventReducer
