import React from "react"
import { Redirect } from "react-router-dom"
import { useGoogleLogout } from "react-google-login"
// import axios from "axios"

const clientId =
  "908989225319-6kfd36mrjlkvg0o6225q856qleedam82.apps.googleusercontent.com"

const LogoutHooks = ({ setLogIn }) => {

  const onLogoutSuccess = (res) => {
    console.log("Logged out Success")
    setLogIn(false)
    alert("Logged out Successfully ✌")
  }

  const onFailure = () => {
    console.log("Handle failure cases")
  }

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  })

  return (
    <>
      {/* <Redirect to="/signin" /> */}

      <Redirect to="/notes" />

      <div
        onClick={signOut}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <img src="google.png" alt="google" className="icon"></img> */}
        <p>Sign out</p>
      </div>
    </>
  )
}

export default LogoutHooks
