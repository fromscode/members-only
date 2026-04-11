import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

import NavBarUser from "../components/NavBarUser"

export default function Messages() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [messages, setMessages] = useState<any[]>()
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    async function fetchMessages() {
      const response = await fetch(
        import.meta.env.VITE_backend_uri + "messages",
        {
          mode: "cors",
          headers: {
            Authorization: "bearer " + localStorage.getItem("token"),
          },
        }
      )

      try {
        if (response.status == 401) {
          navigate("/join")
        } else if (response.status == 200) {
          const resBody = await response.json()
          setMessages(resBody.messages)
          setLoading(false)
        } else {
          console.log(response.status + "was returned")
        }
      } catch (err) {
        console.error(err)
      }
    }

    fetchMessages()
  }, [navigate])

  return (
    <>
      <NavBarUser />
      {loading ? (
        <div>Loading</div>
      ) : (
        <>
          {messages?.map((message) => (
            <div>{message.text}</div>
          ))}
        </>
      )}
    </>
  )
}
