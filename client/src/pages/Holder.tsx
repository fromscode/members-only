import { Outlet, useNavigate } from "react-router"
import NavBar from "../components/NavBarUser"
import { useEffect, useState } from "react"

export default function Holder() {
  const [role, setRole] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [errMessage, setErrorMessage] = useState("")

  const navigate = useNavigate()
  useEffect(() => {
    async function getUserRole() {

      try {
        const uri = import.meta.env.VITE_backend_uri + "role"
        const response = await fetch(uri, {
          mode: "cors",
          headers: {
            Authorization: "bearer " + localStorage.getItem("token"),
            "Content-type": "application/json",
          },
        })
        
        if (response.status == 401) {
          navigate("/join")
        } else if (response.status == 200) {
          const resBody = await response.json()
          setRole(resBody.role)
          setLoading(false)
        } else {
          console.log(response.status + " was returned")
          setErrorMessage(
            response.status +
              " was returned from last call to backend on " +
              uri
          )
          setError(true)
        }
      } catch (err) {
        console.error(err)
      }
    }

    getUserRole()
  }, [])

  if (error) throw new Error(errMessage)

  if (loading) return <div>Loading</div>

  return (
    <>
      <NavBar role={role} />
      <Outlet context={role} />
    </>
  )
}
