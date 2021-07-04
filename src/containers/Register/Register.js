import React, { useState } from "react"
import axios from "axios"
import "./Register.scss"

const Register= ({ logUser }) => {

  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmitRegister = () => {
    axios
      .post("http://localhost:5000/register", {
        name: name,
        username: username,
        email: email,
        password: password,
      })
      .then((data) => {
        if (data.data) {
          console.log(data.data)
          logUser(name, username, email)
        }
      })
  }

  return (
    <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-3 center">
      <main className="pa4 black-80 bg-lightest-blue">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0 navy">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">
                Name
              </label>
              <input
                className="pa2 input-reset ba bg-washed-blue hover-bg-black hover-white w-100"
                type="text"
                name="name"
                id="name"
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">
                Username
              </label>
              <input
                className="pa2 input-reset ba bg-washed-blue hover-bg-black hover-white w-100"
                type="text"
                name="username"
                id="username"
                onChange={(e) => {
                  setUsername(e.target.value)
                }}
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-washed-blue hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-washed-blue hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
            </div>
          </fieldset>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--blue bg-blue grow pointer f6 dib white"
              type="submit"
              value="Register"
              onClick={onSubmitRegister}
            />
          </div>
        </div>
      </main>
    </article>
  )
}

export default Register
