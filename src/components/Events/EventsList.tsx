import * as React from "react"
import { format } from "date-fns"
import { useState, useEffect } from "react"
import axios from "axios"
import { Col, Row } from "reactstrap"
import CalendarDate from "./CalendarDate"

import { useSelector } from "react-redux"
import { IStateType } from "../../store/models/root.interface"
import { IEvent } from "../../store/models/event.interface"

const EventsList: React.FC = () => {
   const selectedDate: IEvent = useSelector((state: IStateType) => state.event)
   const newDate = new Date(selectedDate.date)
   const [event, setEvents] = useState<Event[]>([])
   const [monthName, setMonthName] = useState<String>("")

   const getDates = async () => {
      axios.get("./data/calendar.json").then((res) => {
         // const currentMonth = new Date().getMonth() + 1
         // const currentYear = new Date().getFullYear()
         const monthName = format(newDate, "MMMM")
         const selectedMonth = Number(format(newDate, "M"))
         const currentYear = Number(format(newDate, "yyyy"))
         const eventResults = res.data.filter((e: any) => {
            let [year, month] = e.date.split("-")
            return selectedMonth === +month && currentYear == year
         })
         setEvents(eventResults)
         setMonthName(monthName)
      })
   }
   useEffect(() => {
      getDates()
   }, [selectedDate])

   return (
      <div className="calendar-events">
         <p className="calendar-events__title">
            <strong>{monthName} Events</strong>
         </p>

         {event && event.length > 0 ? (
            <ul>
               {event.map((event: any) => (
                  <div>
                     <li key={event.id}>
                        <Row>
                           <Col xs="2">
                              <CalendarDate date={event.date} />
                           </Col>
                           <Col xs="10">
                              <strong>{event.title}</strong> <br />
                              {event.date}
                           </Col>
                        </Row>
                     </li>
                  </div>
               ))}
            </ul>
         ) : (
            <p>No events availble</p>
         )}
      </div>
   )
}

export default EventsList
