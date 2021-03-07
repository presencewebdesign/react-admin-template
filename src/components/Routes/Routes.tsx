import React, { Fragment } from "react"
import LeftMenu from "../LeftMenu/LeftMenu"
import TopMenu from "../TopMenu/TopMenu"
import { Switch, Route } from "react-router"
// import Users from "../Users/Users"
// import Products from "../Products/Products"
// import Events from "../Events/Index"
// import Orders from "../Orders/Orders"
// import Home from "../Home/Home"
import Notifications from "../../common/components/Notification"
import { Container, Col, Row } from "reactstrap"
import routes from "../../routes"

const Router: React.FC = () => {
   return (
      <Fragment>
         <Notifications />
         <LeftMenu />
         <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
               <TopMenu />
               <Container fluid={true}>
                  <Row>
                     <Col sm="12" md="8" lg="9">
                        <Switch>
                           {routes.map((route, i) => (
                              <Route
                                 key={`${i}`}
                                 path={route.path}
                                 exact={true}
                                 component={route.main}
                              />
                           ))}
                        </Switch>
                     </Col>
                     <Col sm="12" md="4" lg="3">
                        <h2>Sidebar</h2>
                        {routes.map(
                           (route, index) =>
                              route.sidebar &&
                              route.sidebar.map((x, i) => (
                                 <Route
                                    key={`${index}.${i}`}
                                    path={route.path}
                                    exact={true}
                                    component={x}
                                 />
                              ))
                        )}
                     </Col>
                  </Row>
               </Container>
            </div>
         </div>
      </Fragment>
   )
}

export default Router
