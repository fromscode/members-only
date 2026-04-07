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
            <h1 className="mt-10 mb-10 text-center text-5xl">Login </h1>
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
                    className="py-5 text-base!"
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
                    className="py-5 text-base!"
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
        <div className="flex max-w-full flex-col items-center justify-center px-5">
          <section className="w-full max-w-lg">
            <h1 className="mt-10 mb-10 text-center text-5xl">Register </h1>
            <form>
              <FieldGroup>
                <Field orientation="horizontal">
                  <FieldLabel
                    htmlFor="firstName"
                    className="min-w-36 flex-1 text-lg"
                  >
                    First Name
                  </FieldLabel>
                  <Input
                    id="firstName"
                    placeholder="Big"
                    required
                    className="flex-10 py-5 text-base!"
                  />
                </Field>
                <Field orientation="horizontal">
                  <FieldLabel
                    htmlFor="lastName"
                    className="min-w-36 flex-1 text-lg"
                  >
                    Last Name
                  </FieldLabel>
                  <Input
                    id="lastName"
                    placeholder="Smoke"
                    required
                    className="flex-10 py-5 text-base!"
                  />
                </Field>
                <Field orientation="horizontal">
                  <FieldLabel
                    htmlFor="username"
                    className="min-w-36 flex-1 text-lg"
                  >
                    Username
                  </FieldLabel>
                  <Input
                    id="username"
                    placeholder="2number9s"
                    required
                    className="flex-10 py-5 text-base!"
                  />
                </Field>
                <Field className="mt-2">
                  <FieldLabel htmlFor="password" className="text-lg">
                    Password
                  </FieldLabel>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    className="py-5 text-base!"
                    required
                  />
                </Field>
                <Field className="mt-2">
                  <FieldLabel htmlFor="confirmPassword" className="text-lg">
                    Confirm Password
                  </FieldLabel>
                  <Input
                    type="confirmPassword"
                    placeholder="••••••••"
                    className="py-5 text-base!"
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
                    Already have an account? Login
                  </span>
                </Field>
              </FieldGroup>
            </form>
          </section>
        </div>
      </>
    )
}

export default Join
