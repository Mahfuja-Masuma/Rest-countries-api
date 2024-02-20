import { Outlet } from "react-router-dom"
import NavbarOne from "../components/NavbarOne"
import Footer from "../components/Footer"



function LayoutOne() {
  return (
    <>
    <NavbarOne/>
    
    <Outlet/>
    <Footer/>
    </>
  )
}

export default LayoutOne