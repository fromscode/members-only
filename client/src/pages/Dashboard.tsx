import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

import NavBarUser from "../components/NavBarUser"
import { Card, CardHeader, CardDescription, CardTitle, CardAction, CardContent, CardFooter } from "@/components/ui/Card"
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
          console.log(resBody.messages);
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
          <div className="flex gap-4 m-5">
            {messages?.map((message) => (
              <Card size="sm" className="mx-auto w-full max-w-sm bg-input p-4 gap-0!">
                <CardHeader className="p-0!">
                  <CardTitle className="text-xs! flex gap-3 items-center"><div className="h-5 w-5 rounded-full bg-primary"></div>{message.author}</CardTitle>
                </CardHeader>
                <hr className="my-2" />
                <CardHeader className="p-0!">
                  <CardTitle className="text-lg">{message.title}</CardTitle>
                </CardHeader>
                <CardDescription className="mb-4">
                  {message.body}
                </CardDescription>
                <div className="flex mt-auto bg-none">
                  <Button  className=" cursor-pointer bg-red-950 mt-auto ">
                    Action
                  </Button>
                  <Button className="bg-red-950 cursor-pointer text-accent-foreground">
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
