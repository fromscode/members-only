import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/Card"
import { Button } from "@/components/ui/button"

import { Trash2 } from "lucide-react"

export default function Dashboard() {
  // const role = useOutletContext()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [messages, setMessages] = useState<any[]>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [errMessage, setErrorMessage] = useState("")

  const navigate = useNavigate()

  useEffect(() => {
    async function fetchMessages() {
      const uri = import.meta.env.VITE_backend_uri + "messages"
      const response = await fetch(uri, {
        mode: "cors",
        headers: {
          Authorization: "bearer " + localStorage.getItem("token"),
        },
      })

      try {
        if (response.status == 401) {
          navigate("/join")
        } else if (response.status == 200) {
          const resBody = await response.json()
          setMessages(resBody.messages)
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

    fetchMessages()
  }, [navigate])

  function handleDelete() {}

  if (error) throw new Error(errMessage)

  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <>
          <div className="m-5 flex flex-wrap gap-4 overflow-y-auto">
            {messages?.map((message) => (
              <Card
                key={message.id}
                size="sm"
                className="mx-auto w-full max-w-sm gap-0! bg-input p-4"
              >
                <CardHeader className="p-0!">
                  <CardTitle className="flex items-center gap-3 text-xs!">
                    <div className="h-5 w-5 rounded-full bg-primary"></div>
                    {message.author || "Anonymous"}
                  </CardTitle>
                </CardHeader>
                <hr className="my-2" />
                <CardHeader className="mb-2 p-0!">
                  <CardTitle className="text-lg">{message.title}</CardTitle>
                </CardHeader>
                <CardDescription className="mb-4">
                  {message.body.split("\n").map((str: string, i: number) => (
                    <div key={i}>
                      {str}
                      <br />
                    </div>
                  ))}
                  <hr />
                </CardDescription>
                <div className="mt-auto flex items-center gap-2 bg-none">
                  <div className="flex gap-2 text-muted-foreground">
                    <span>
                      {new Date(message.timestamp)
                        .toDateString()
                        .split(" ")
                        .slice(1)
                        .map((v, i) =>
                          i == 1 ? v + "," : i == 2 ? v.slice(2) : v
                        )
                        .join(" ")}
                    </span>
                    <span>
                      {new Date(message.timestamp)
                        .toLocaleTimeString()
                        .split(" ")
                        .map((v, i) =>
                          i ? v : v.split(":").slice(0, 2).join(":")
                        )
                        .join(" ")}
                    </span>
                  </div>
                  {message.author && (
                    <Button
                      className="ml-auto cursor-pointer bg-red-950 text-accent-foreground"
                      onClick={handleDelete}
                    >
                      <Trash2 />
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </>
      )}
    </>
  )
}
