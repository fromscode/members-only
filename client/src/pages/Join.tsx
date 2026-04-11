import { useState } from "react"

import Login from "../components/Login"
import Register from "../components/Register"
import NavBar from "../components/NavBar"

export function Join() {
  const [showLogin, setShowLogin] = useState(true)
  const [username, setUsername] = useState<string | undefined>(undefined)

  function toggleDisplay() {
    setShowLogin(!showLogin)
  }

  return (
    <>
      <NavBar></NavBar>
      {showLogin ? (
        <Login
          toggleDisplay={toggleDisplay}
          username={username}
          setUsername={setUsername}
        />
      ) : (
        <Register
          toggleDisplay={toggleDisplay}
          username={username}
          setUsername={setUsername}
        />
      )}
    </>
  )
}

export default Join
