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

  async function handleDelete(postId: number) {
    try {
      const uri = import.meta.env.VITE_backend_uri + "delete/" + postId
      const res = await fetch(uri, {
        headers: {
          Authorization: "bearer " + localStorage.getItem("token"),
        },
        mode: "cors",
        method: "Delete",
      })

      if (res.status == 200) {
        navigate(0)
      } else {
        console.log(res.body)
      }
    } catch (err) {
      console.error(err)
    }
  }

  if (error) throw new Error(errMessage)

  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <>
          <div className="m-5 flex flex-wrap gap-4">
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
                {message.isDeleted ? (
                  <CardDescription>
                    Post is deleted by {message.deletedBy}
                  </CardDescription>
                ) : (
                  <>
                    <CardHeader className="mb-2 p-0!">
                      <CardTitle className="text-lg">{message.title}</CardTitle>
                    </CardHeader>
                    <CardDescription className="mb-1">
                      {message.body
                        .split("\n")
                        .map((str: string, i: number) => (
                          <div key={i}>
                            {str}
                            <br />
                          </div>
                        ))}
                    </CardDescription>
                  </>
                )}
                <div className="mt-auto gap-2 bg-none">
                  <hr className="mb-2" />
                  <div className="flex items-center gap-2">
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
                    {message.canDelete && !message.isDeleted && (
                      <Button
                        className="ml-auto cursor-pointer bg-red-950 text-accent-foreground"
                        onClick={() => handleDelete(message.id)}
                      >
                        <Trash2 />
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </>
      )}
    </>
  )
}
