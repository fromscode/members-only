import NavBar from "../components/NavBar"
import { NavLink } from "react-router"

export default function ErrorBoundary() {
  return (
    <>
      <NavBar></NavBar>
      <div className="flex w-screen flex-col items-center justify-center gap-3">
        <h1 className="mt-20 text-2xl">Some Error Occurred!</h1>
        <NavLink to="/" className="text-primary underline hover:no-underline">
          Back to Home page
        </NavLink>
      </div>
    </>
  )
}
