import { NavLink } from "react-router"

export default function NotFound() {
  return (
    <>
      <div className="flex w-screen flex-col items-center justify-center gap-3">
        <h1 className="mt-20 flex gap-2 text-2xl">
          <span>404</span>
          <span className="text-5xl">|</span>
          <span>The requested resource cannot be found!</span>
        </h1>
        <NavLink to="/" className="text-primary underline hover:no-underline">
          Back to Home page
        </NavLink>
      </div>
    </>
  )
}
