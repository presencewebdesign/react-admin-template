import * as React from "react"
import { format } from "date-fns"

interface CalendarDateProps {
   date: Date
}

const CalendarDate: React.FC<CalendarDateProps> = (props) => {
   const getDate = format(new Date(props.date), "dd")
   const getMonthName = format(new Date(props.date), "EEEE")

   return (
      <div className="calendar-date-box">
         <div className="calendar-date-box__header">{getMonthName}</div>
         <div className="calendar-date-box__day"> {getDate}</div>
      </div>
   )
}
export default CalendarDate
