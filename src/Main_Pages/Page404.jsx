import { NavLink } from "react-router"

export default function Page404() {
  return (
    <div style={{ paddingTop:'60px'}}>
    <p>Sorry, the page you were looking for doesn't exist</p>
    <div>
    <NavLink to={'/'}>
        <button>Return home</button>
    </NavLink>
    </div>
    </div>
  )
}
