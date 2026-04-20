import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

import NavBarUser from "../components/NavBarUser"
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
          console.log(resBody.messages)
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
      <NavBarUser role="USER" /> {/* // TODO - Fetch from backend */}
      {loading ? (
        <div>Loading</div>
      ) : (
        <>
          <div className="m-5 flex gap-4">
            {messages?.map((message) => (
              <Card
                key={message.id}
                size="sm"
                className="mx-auto w-full max-w-sm gap-0! bg-input p-4"
              >
                <CardHeader className="p-0!">
                  <CardTitle className="flex items-center gap-3 text-xs!">
                    <div className="h-5 w-5 rounded-full bg-primary"></div>
                    {message.author}
                  </CardTitle>
                </CardHeader>
                <hr className="my-2" />
                <CardHeader className="p-0!">
                  <CardTitle className="text-lg">{message.title}</CardTitle>
                </CardHeader>
                <CardDescription className="mb-4">
                  {message.body.split("\n").map((str: string, i: number) => (
                    <div key={i}>
                      {str}
                      <br />
                    </div>
                  ))}
                </CardDescription>
                <div className="mt-auto flex bg-none">
                  <Button className="mt-auto cursor-pointer bg-red-950">
                    Action
                  </Button>
                  <Button className="cursor-pointer bg-red-950 text-accent-foreground">
                    <Trash2 />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </>
      )}
    </>
  )
}
