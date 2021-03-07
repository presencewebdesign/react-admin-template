import * as React from "react"
import { RouteComponentProps } from "react-router"

import Home from "./components/Home/Home"
import Events from "./components/Events/Index"
import EventsCalendar from "./components/Events/EventsCalendar"
import EventsList from "./components/Events/EventsList"

type AppRoute = {
   path: string
   main:
      | React.ComponentType<RouteComponentProps<any>>
      | React.ComponentType<any>
   sidebar?: (
      | React.ComponentType<RouteComponentProps<any>>
      | React.ComponentType<any>
   )[]
}

const routes: AppRoute[] = [
   {
      path: "/",
      main: Home,
   },
   {
      path: "/events",
      main: Events,
      sidebar: [EventsCalendar, EventsList],
   },
]

export default routes
