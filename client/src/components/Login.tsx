import { Button } from "@/components/ui/button"
import React, { useState } from "react"

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

type LoginProps = {
  toggleDisplay: () => void
  username: string | undefined
  setUsername: (username: string | undefined) => void
}

export default function Login({
  toggleDisplay,
  username,
  setUsername,
}: LoginProps) {
  const [password, setPassword] = useState<string | undefined>(undefined)

  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
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
}
