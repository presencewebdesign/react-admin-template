import React from "react"
import "./App.scss"
import { BrowserRouter as Router, Switch } from "react-router-dom"
import Login from "./components/Account/Login"
import Routes from "./components/Routes/Routes"
import { PrivateRoute } from "./common/components/PrivateRoute"
import { AccountRoute } from "./common/components/AccountRoute"

const App: React.FC = () => {
   return (
      <div className="App" id="wrapper">
         <Router>
            <Switch>
               <PrivateRoute path="/">
                  <Routes />
               </PrivateRoute>
               <AccountRoute path="/login">
                  <Login />
               </AccountRoute>
            </Switch>
         </Router>
      </div>
   )
}

export default App
