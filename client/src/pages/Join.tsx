import { Button } from "@/components/ui/button"
import NavBar from "../components/NavBar"
import { useState } from "react"

import { Eye, EyeOff } from "lucide-react"

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

  const [username, setUsername] = useState<string | undefined>(undefined)
  const [password, setPassword] = useState<string | undefined>(undefined)
  const [firstname, setFirstname] = useState<string | undefined>(undefined)
  const [lastname, setLastname] = useState<string | undefined>(undefined)
  const [confirmPassword, setConfirmPassword] = useState<string | undefined>(
    undefined
  )

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  function toggleDisplay() {
    setShowPassword(false)
    setShowConfirmPassword(false)
    setShowLogin(!showLogin)
  }

  if (showLogin)
    return (
      <>
        <NavBar></NavBar>
        <div className="flex flex-col items-center justify-center overflow-x-hidden px-5">
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
  else
    return (
      <>
        <NavBar></NavBar>
        <div className="flex flex-col items-center justify-center px-5">
          <section className="w-xl shrink">
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
                    value={firstname || ""}
                    onChange={(e) => setFirstname(e.target.value)}
                    className="min-w-0 py-5 text-base!"
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
                    value={lastname || ""}
                    onChange={(e) => setLastname(e.target.value)}
                    className="min-w-0 py-5 text-base!"
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
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="min-w-0 py-5 text-base!"
                  />
                </Field>
                <Field className="mt-2">
                  <FieldLabel htmlFor="password" className="text-lg">
                    Password
                  </FieldLabel>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="min-w-0 py-5 pr-10 text-base!"
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
                <Field className="mt-2">
                  <FieldLabel htmlFor="confirmPassword" className="text-lg">
                    Confirm Password
                  </FieldLabel>
                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="min-w-0 py-5 pr-10 text-base!"
                      required
                    />
                    {confirmPassword && confirmPassword.length && (
                      <button
                        type="button"
                        className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-5 w-5"></EyeOff>
                        ) : (
                          <Eye className="h-5 w-5"></Eye>
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
