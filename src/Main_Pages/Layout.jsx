import { NavLink, Outlet } from "react-router";
import logo from './lgo.png'
import useAuth from "./Context/useAuth";

export default function Layout() {

  const {user, signOut} = useAuth()

 function onClick (){
  signOut()
 }

  return (
    <>
    <nav>
        <div>
        <NavLink to={'/'}><img className="logo" src={logo} alt="CatDog" /></NavLink>
        <NavLink to={'/'}><h2 style={{display:'inline-block', marginLeft:'100px', 
         marginTop:'30px', color: '#6121BF'}}>CatDog</h2></NavLink>
        </div> 
        <div className="links">
        <NavLink  to={'about'} className='nav-link'>About</NavLink>
        <NavLink  to={'catsdogs'} className='nav-link'>Our Cats & Dogs</NavLink>
        {!user&&<NavLink to={'login'}><img className="login" src={`/public/login.png`} alt="Login" />
        </NavLink>}
        {user&&<img className="logout" src={`/public/logout.png`} alt="Logout" onClick={onClick}/>}
        </div>

    </nav>
    <main>
    <Outlet/>
    </main>
    <footer>
    ©2024 CatDog
    </footer>
    </>
  )
}
