import Navbar from "./components/Navbar/Navbar"
import { Route, Switch } from "react-router-dom"
import React, { useState, useEffect } from "react"
import About from "./containers/About"
import Notes from "./containers/Notes/Notes"
import Newnote from "./containers/Newnote/Newnote"
import Editnote from "./containers/Editnote/Editnote"

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

  // useEffect(() => {
  //   console.log("USER =>\n", user)
  // }, [user])

  const [note, setNote] = useState({
    googleId: 0,
    title: "",
    body: "",
  })
  const editNote = (a, b, c) => {
    setNote({
      googleId: a,
      title: b,
      body: c,
    })
  }

  useEffect(() => {
    console.log("NOTE =>\n", note)
  }, [note])

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
        <Route exact path="/notes/new">
          <Newnote user={user} />
        </Route>
        <Route exact path="/notes/edit">
          <Editnote note={note} />
        </Route>
        <Route exact path="/notes">
          <Notes user={user} note={note} editNote={editNote} />
        </Route>
        {/* <Route exact path="/notes/edit">
          <Editnote
            note={note}
            // editNote={editNote}
          />
        </Route> */}
        <Route component={About} />
      </Switch>
    </div>
  )
}

export default App
