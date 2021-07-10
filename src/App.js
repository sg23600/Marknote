import Navbar from "./components/Navbar/Navbar"
import { Route, Switch } from "react-router-dom"
import React, { useState, useEffect } from "react"
import About from "./containers/About"
import Notes from "./containers/Notes/Notes"

import "./App.scss"

const App = () => {
  const [user, setUser] = useState({
    email: "",
    familyName: "",
    givenName: "",
    googleId: "",
    imageUrl: "",
    name: "",
  })
  const [logIn, setLogIn] = useState(false)

  useEffect(() => {
    console.log("USER =>\n", user)
  }, [user])
  return (
    <div className="App">
      <Navbar logIn={logIn} setUser={setUser} setLogIn={setLogIn} />
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/contact">
          <h1>CONTACT</h1>
        </Route>

        <Route exact path="/signin">
          <Notes />
        </Route>
        <Route component={About} />
      </Switch>
    </div>
  )
}

export default App
