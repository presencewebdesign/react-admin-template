import React, { Fragment, Dispatch, useState, useEffect } from "react"
import Calendar, { DateCallback } from "react-calendar"
import { useDispatch, useSelector } from "react-redux"
import { format, isSameDay, startOfMonth } from "date-fns"
import { ChevronLeft, ChevronRight } from "react-feather"
import { addEvent } from "../../store/actions/events.actions"

const EventsCalendar: React.FC = () => {
   const dispatch: Dispatch<any> = useDispatch()
   const now = new Date()

   const onChange = (date: any) => {
      dispatch(addEvent(date))
   }

   return (
      <div className="o-event-calendar">
         <Calendar
            //activeStartDate={startOfMonth(props.date)}
            formatShortWeekday={(locale, date) => format(date, "EEEEE")}
            tileClassName={({ date, view }) => {
               let css: string[] = []
               if (view === "month" && isSameDay(date, now)) {
                  css.push(
                     "react-calendar__tile react-calendar__month-view__days__day--today"
                  )
               }

               // TODO: add this class when there are events
               if (Math.floor(Math.random() * 10) % 2 === 1) {
                  css.push(
                     "react-calendar__tile react-calendar__month-view__days__day--events"
                  )
               }
               return css
            }}
            prevLabel={<ChevronLeft width={16} height={16} />}
            nextLabel={<ChevronRight width={16} height={16} />}
            onClickDay={(e) => onChange(e)}
            onActiveStartDateChange={(e) => {
               dispatch(addEvent(e.activeStartDate))
            }}
         />
      </div>
   )
}

export default EventsCalendar
