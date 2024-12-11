import { createBrowserRouter, createRoutesFromElements, 
Route, RouterProvider } from "react-router"
import Layout from "./Main_Pages/Layout"
import MainPage from "./Main_Pages/MainPage"
import About from "./Main_Pages/About"
import CatDogs from "./Main_Pages/CatDogs"
import Page404 from "./Main_Pages/Page404"
import OneAnimal from "./Main_Pages/Components/OneAnimal"
import Contact from "./Main_Pages/Contact"
import Private from "./Main_Pages/Private"
import Login from "./Main_Pages/Login"
import AuthProvider from "./Main_Pages/Context/AuthContext"

export default function App() {


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
       <Route index element={<MainPage/>}/>
       <Route path="about" element={<About/>}/>
              <Route element={<Private/>}>
                  <Route path="contact" element={<Contact/>}/>
              </Route>
       <Route path="catsdogs" element={<CatDogs/>}/>
       <Route path="catsdogs/:id" element={<OneAnimal/>}/>
       <Route path="login" element={<Login/>}/>
       <Route path="*" element={<Page404/>}/>

  </Route>))


  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}