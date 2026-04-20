import { useEffect, useState } from "react"
import NavBar from "../components/NavBarUser"

import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/TextArea"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router"

export default function Message() {
  const [errorMessage, setErrorMessage] = useState<string>()
  const [title, setTitle] = useState<string>("")
  const [body, setBody] = useState<string>("")

  const navigate = useNavigate()

  useEffect(() => {
    const localToken = localStorage.getItem("token")
    if (!localToken) navigate("/join")
  }, [navigate])

  async function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault()
    const backend = import.meta.env.VITE_backend_uri as string
    try {
      const response = await fetch(backend + "message", {
        method: "POST",
        body: JSON.stringify({ title, body, timestamp: new Date() }),
        mode: "cors",
        headers: {
          Authorization: "bearer " + localStorage.getItem("token"),
          "Content-type": "application/json",
        },
      })

      if (response.status == 200) {
        navigate("/dashboard")
      } else if (response.status == 500) {
        setErrorMessage("Internal Server Error")
      } else if (response.status == 401) {
        setErrorMessage("Unauthorized user!")
      } else {
        setErrorMessage(`${response.status}  error`)
      }
    } catch (err) {
      console.error(err)
      setErrorMessage("Some error occured! Refer to console")
    }
  }

  return (
    <>
      <NavBar role="USER" /> {/* // TODO- fetch from backend */}
      <div className="flex flex-col items-center justify-center overflow-x-hidden px-5">
        <section className="w-full max-w-lg">
          <h1 className="mt-10 mb-10 text-center text-5xl">Post Message </h1>
          {errorMessage && (
            <div className="mb-5 rounded-bl-xs bg-red-950 py-2 text-center">
              {errorMessage}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="title" className="text-lg">
                  Title
                </FieldLabel>
                <Input
                  id="title"
                  placeholder="Hesitation is Defeat"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="py-5 text-base!"
                />
              </Field>
              <Field className="mt-2">
                <FieldLabel htmlFor="body" className="text-lg">
                  Body
                </FieldLabel>
                <div className="relative">
                  <Textarea
                    id="body"
                    placeholder="Type your message here."
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="max-h-52 resize-none py-5 text-base!"
                    style={{
                      scrollbarColor: "var(--input) rgba(0, 0, 0, 0)",
                    }}
                    required
                  />
                </div>
              </Field>
              <Field
                orientation="horizontal"
                className="mt-5 mb-20 flex flex-col items-center"
              >
                <Button
                  type="submit"
                  className="w-32 cursor-pointer rounded-2xl p-5 py-7 text-lg"
                >
                  Post
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </section>
      </div>
    </>
  )
}
