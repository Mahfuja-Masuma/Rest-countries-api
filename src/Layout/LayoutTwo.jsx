import { Outlet } from "react-router-dom"
import NavbarTwo from "../components/NavbarTwo"
import Footer from "../components/Footer"


function LayoutTwo() {
  return (
    <>
    <NavbarTwo/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default LayoutTwo