import { Button } from "@/components/ui/button"
import { NavLink } from "react-router"

import NavBar from "../components/NavBar"

export function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="flex flex-col items-center justify-center">
        <section className="mt-20 flex-1">
          <h1 className="mb-14 text-center text-5xl">OnlyChat</h1>
          <p>The super private messaging board for members only.</p>
          <p>Post in complete privacy, only members can see your messages.</p>
          <p>
            Enjoy the power of anonymity and show the world your true inner
            self.
          </p>
          <p className="mt-5">Join in on the conversation right now!</p>
        </section>
        <section className="mt-10 mb-20 flex flex-1 gap-10">
          <NavLink to="/join">
            <Button className="w-32 cursor-pointer rounded-2xl p-5 py-7 text-lg">
              Join
            </Button>
          </NavLink>
        </section>
      </div>
    </>
  )
}

export default App
