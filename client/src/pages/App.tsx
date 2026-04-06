import { Button } from "@/components/ui/button"
import { NavLink } from "react-router";

import NavBar from '../components/NavBar';


export function App() {
  return (
    <>
    <NavBar></NavBar>
    <div className="flex flex-col justify-center items-center">
      <section className="flex-1 mt-20">
        <h1 className="text-5xl text-center mb-14">OnlyChat</h1>
        <p>The super private messaging board for members only.</p>
        <p>Post in complete privacy, only members can see your messages.</p>
        <p>Enjoy the power of anonymity and show the world your true inner self.</p>
        <p className="mt-5">Join in on the conversation right now!</p>
      </section>
      <section className="mt-10 flex gap-10 mb-20 flex-1">
        <NavLink to='/join'>
          <Button className="cursor-pointer text-lg p-5 py-7 w-32 rounded-2xl">
            Join
          </Button>
        </NavLink>
      </section>
    </div>
    </>
  )
}

export default App
