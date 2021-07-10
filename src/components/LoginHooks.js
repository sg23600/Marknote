import React from "react"
import { useGoogleLogin } from "react-google-login"

// refresh token
import { refreshTokenSetup } from "../utils/refreshToken"

const clientId =
  "908989225319-6kfd36mrjlkvg0o6225q856qleedam82.apps.googleusercontent.com"

const LoginHooks = ({ setLogIn, setUser }) => {
  const onSuccess = async (res) => {
    // console.log("Login successful, current user: ", res.profileObj)
    const data = res.profileObj
    await setLogIn(true)
    await setUser({
      email: data.email,
      familyName: data.familyName,
      givenName: data.givenName,
      googleId: data.googleId,
      imageUrl: data.imageUrl,
      name: data.name,
    })
    alert(`Logged in!! Welcome ${res.profileObj.name}`)
    refreshTokenSetup(res)
  }

  const onFailure = (res) => {
    console.log("Login failed res:", res)
    alert(`Failed to login!`)
  }

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
  })

  return (
    <div
      onClick={signIn}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src="google.png" alt="google" className="icon"></img>
      <p>Sign in</p>
    </div>
  )
}
export default LoginHooks
