import React, { Fragment, Dispatch, useState, useEffect } from "react"
import Calendar, { DateCallback } from "react-calendar"
import { useDispatch, useSelector } from "react-redux"
import { format, isSameDay, startOfMonth } from "date-fns"
import { ChevronLeft, ChevronRight } from "react-feather"
import { addEvent } from "../../store/actions/events.actions"

const EventsCalendar: React.FC = () => {
   const dispatch: Dispatch<any> = useDispatch()
   const now = new Date()

   const calendar = {
      results: [
         {
            id: 0,
            event_id: 1,
            date: "2021-03-02",
            eventClasses: "optionalEvent",
            title: "test event",
            description: "This is a test description of an event",
         },
         {
            id: 1,
            event_id: 1,
            date: "2021-03-21",
            title: "test event",
            description: "This is a test description of an event",
            data: "you can add what ever random data you may want to use later",
         },
      ],
   }

   const onChange = (date: any) => {
      dispatch(addEvent(date))
   }

   const markCalendarArray = async () => {
      const calendarResults = calendar.results.map((e: any) => {
         console.log("Check ", e.date)
         const changeDate = new Date(e.date)
         const setdate = format(changeDate, "yyyy-MM-dd")
         return setdate
      })
      setCalendar(calendarResults)
      return calendarResults
   }

   const [calendarDates, setCalendar] = useState<Calendar[]>([])
   console.log(
      "🚀 ~ file: EventsCalendar.tsx ~ line 49 ~ calendarDates",
      calendarDates
   )

   useEffect(() => {
      markCalendarArray()
   }, [])

   //const mark = ["2021-03-21", "2021-03-02"]

   return (
      <div className="o-event-calendar">
         <Calendar
            //activeStartDate={startOfMonth(props.date)}
            formatShortWeekday={(locale, date) => format(date, "EEEEE")}
            tileClassName={({ date, view }) => {
               const viewDate = format(date, "yyyy-MM-dd").toString()

               let css: string[] = []
               if (view === "month" && isSameDay(date, now)) {
                  css.push(
                     "react-calendar__tile react-calendar__month-view__days__day--today"
                  )
               }

               if (calendarDates.find((x) => x === viewDate)) {
                  console.log("date ", date)
                  css.push(
                     "react-calendar__tile react-calendar__month-view__days__day--events"
                  )
               }

               // TODO: add this class when there are events
               // if (getCalendar(date)) {
               //    css.push(
               //       "react-calendar__tile react-calendar__month-view__days__day--events"
               //    )
               // }
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
