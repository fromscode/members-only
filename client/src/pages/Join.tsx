import { Button } from "@/components/ui/button"
import NavBar from "../components/NavBar"
import { useState } from "react"

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldError,
} from "@/components/ui/field"

import { Input } from "@/components/ui/input"

export function Join() {
  const [showLogin, setShowLogin] = useState(true)

  if (showLogin)
    return (
      <>
        <NavBar></NavBar>
        <div className="flex flex-col items-center justify-center px-5">
          <section className="w-full max-w-lg">
            <h1 className="mt-10 mb-14 text-center text-5xl">Login </h1>
            <form>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="username" className="text-lg">
                    Username or Email
                  </FieldLabel>
                  <Input
                    id="username"
                    placeholder="Glass Cat"
                    required
                    className="py-5 text-base"
                  />
                </Field>
                <Field className="mt-2">
                  <FieldLabel htmlFor="password" className="text-lg">
                    Password
                  </FieldLabel>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="py-5 text-base"
                    required
                  />
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
                    onClick={() => {
                      setShowLogin(!showLogin)
                    }}
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
  else
    return (
      <>
        <NavBar></NavBar>
        <div className="flex flex-col items-center justify-center">
          <section className="">
            <h1 className="mt-20 mb-14 text-center text-5xl">Register </h1>
            <p>The super private messaging board for members only.</p>
            <p>Post in complete privacy, only members can see your messages.</p>
            <p>
              Enjoy the power of anonymity and show the world your true inner
              self.
            </p>
            <p className="mt-5">Join in on the conversation right now!</p>
          </section>
          <section className="mt-10 mb-20 flex items-end gap-10">
            <Button className="w-32 cursor-pointer rounded-2xl p-5 py-7 text-lg">
              Join
            </Button>
            <span
              onClick={() => {
                setShowLogin(!showLogin)
              }}
              className="h-fit cursor-pointer underline underline-offset-2 hover:no-underline"
            >
              Already have an account? Login
            </span>
          </section>
        </div>
      </>
    )
}

export default Join
