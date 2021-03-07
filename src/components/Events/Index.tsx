import React, { Fragment, Dispatch, useState, useEffect } from "react"
import StatisticBox from "../../common/components/StatisticBox"
import { Col, Container, Row } from "reactstrap"
import { useDispatch } from "react-redux"
import { updateCurrentPath } from "../../store/actions/root.actions"

const data = {
   id: 1,
   title: "Web Stats",
   isPercent: true,
   description: "Hello description",
   value: "300",
   results: [
      {
         id: 0,
         title: "unique views",
         isPercent: false,
         value: "100",
      },
      {
         id: 1,
         title: "downloads",
         isPercent: true,
         value: "50",
      },
   ],
}
const Events: React.FC = () => {
   const dispatch: Dispatch<any> = useDispatch()
   dispatch(updateCurrentPath("event", ""))

   return (
      <Fragment>
         <h1 className="h3 mb-2 text-gray-800">Events</h1>
         <Container>
            <Row>
               <Col>
                  <StatisticBox statistic={data} />
               </Col>
               <Col>
                  <StatisticBox statistic={data} />
               </Col>
               <Col>
                  <StatisticBox statistic={data} />
               </Col>
            </Row>
         </Container>
      </Fragment>
   )
}

export default Events
