import { Button } from "@/components/ui/button"
import NavBar from "../components/NavBar"
import { useState } from "react"

export function Join() {
  const [isLoginShown, setIsLoginShown] = useState(fsalse)
  return (
    <>
      <NavBar></NavBar>
      <div className="flex flex-col items-center justify-center">
        <section className="">
          <h1 className="mt-20 mb-14 text-center text-5xl">JOIN NOW </h1>
          <p>The super private messaging board for members only.</p>
          <p>Post in complete privacy, only members can see your messages.</p>
          <p>
            Enjoy the power of anonymity and show the world your true inner
            self.
          </p>
          <p className="mt-5">Join in on the conversation right now!</p>
        </section>
        <section className="mt-10 mb-20 flex gap-10">
          <Button className="w-32 cursor-pointer rounded-2xl p-5 py-7 text-lg">
            Join
          </Button>
        </section>
      </div>
    </>
  )
}

export default Join
