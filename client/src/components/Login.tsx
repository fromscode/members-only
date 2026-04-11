import { Button } from "@/components/ui/button"
import React, { useState } from "react"

import { Eye, EyeOff } from "lucide-react"

import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"

import { Input } from "@/components/ui/input"
import { useNavigate } from "react-router"

type LoginProps = {
  toggleDisplay: () => void
  username: string
  setUsername: (username: string) => void
}

export default function Login({
  toggleDisplay,
  username,
  setUsername,
}: LoginProps) {
  const [password, setPassword] = useState<string>("")

  const [showPassword, setShowPassword] = useState(false)

  const [errorMessage, setErrorMessage] = useState<string>("")
  const navigate = useNavigate()

  async function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault()

    const backend = import.meta.env.VITE_backend_uri as string
    try {
      const response = await fetch(backend + "login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (response.status == 400) {
        setErrorMessage("Invalid credentials")
      } else if (response.status == 401) {
        setErrorMessage("Incorrect username or password")
      } else if (response.status == 200) {
        const token = (await response.json()).token as string
        localStorage.setItem("token", token)
        navigate("/messages")
      } else if (response.status == 500) {
        setErrorMessage("Internal Server Error")
      } else {
        setErrorMessage(response.status + " error")
      }
    } catch (err) {
      setErrorMessage("Some error occurred, Refer to console")
      console.error(err)
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center overflow-x-hidden px-5">
        <section className="w-full max-w-lg">
          <h1 className="mt-10 mb-10 text-center text-5xl">Login </h1>
          {errorMessage && (
            <div className="mb-5 rounded-bl-xs bg-red-950 py-2 text-center">
              {errorMessage}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="username" className="text-lg">
                  Username or Email
                </FieldLabel>
                <Input
                  id="username"
                  placeholder="Glass Cat"
                  minLength={4}
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="py-5 text-base!"
                />
              </Field>
              <Field className="mt-2">
                <FieldLabel htmlFor="password" className="text-lg">
                  Password
                </FieldLabel>
                <div className="relative">
                  <Input
                    id={"password"}
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    minLength={6}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="py-5 text-base!"
                    required
                  />
                  {password && password.length && (
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  )}
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
                  Join
                </Button>
                <span
                  onClick={toggleDisplay}
                  className="mt-2 h-fit cursor-pointer text-sm underline underline-offset-2 opacity-70 hover:no-underline"
                >
                  New to OnlyChat? Create an account first
                </span>
              </Field>
            </FieldGroup>
          </form>
        </section>
      </div>
    </>
  )
}
