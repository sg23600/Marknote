import Navbar from "./components/Navbar/Navbar"
import { Route, Switch } from "react-router-dom"
import About from "./containers/About"
import Signin from "./containers/Signin/Signin"
import Register from "./containers/Register/Register"

import "./App.scss"

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/contact">
          <h1>CONTACT</h1>
        </Route>

        <Route exact path="/signin">
          <Signin />
        </Route>
        <Route component={About} />
      </Switch>
    </div>
  )
}

export default App
