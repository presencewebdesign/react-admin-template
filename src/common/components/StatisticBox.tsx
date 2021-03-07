import * as React from "react"
import { Card, CardText, CardBody, CardTitle, Col, Row } from "reactstrap"
import { ICardProperties } from "../types/StatisticBox.types"

const StatisticBox: React.FC<ICardProperties> = (props) => {
   return (
      <Col>
         <div className="statbox">
            <Card>
               <CardBody>
                  <CardTitle className="statbox__title">
                     {props.statistic.title}
                  </CardTitle>
                  <CardText className="statbox__total">
                     {props.statistic.value}
                     {props.statistic.isPercent ? "%" : null}
                  </CardText>
               </CardBody>
               <div className="statbox__groupresults">
                  <Row>
                     {props.statistic.results.map((stat, index) =>
                        index < 3 ? (
                           <Col
                              className={`${index === 1 ? "noborder" : ""}`}
                              key={stat.id}
                           >
                              <p className="title">{stat.title}</p>
                              <p className="value">
                                 {stat.value}
                                 {stat.isPercent ? "%" : null}
                              </p>
                           </Col>
                        ) : null
                     )}
                  </Row>
               </div>
            </Card>
         </div>
      </Col>
   )
}
export default StatisticBox
