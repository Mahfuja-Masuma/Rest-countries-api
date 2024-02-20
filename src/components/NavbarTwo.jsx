import { Link, NavLink } from "react-router-dom"
import { FaAngleLeft  } from "react-icons/fa6";

function NavbarTwo() {
  return (
    <nav className="py-3 bg-indigo-300">
      <div className="container mx-auto flex justify-between items-center text-center">
        <div><Link className="text-4xl font-bold uppercase text-red-500">Logo</Link></div>
        <div className="flex gap-3">
          <ul className="flex gap-3 ">
            <li className="text-lg text-white"><NavLink to='/'>Home</NavLink></li>
            <li className="text-lg text-white"><NavLink to='/layouttwo/about'>About</NavLink></li>
            <li className="text-lg text-white"><NavLink to='/layouttwo/allcontries'>Countries</NavLink></li>
          </ul>
        <div ><Link to="/"><FaAngleLeft  className=" text-center items-center mt-2 text-indigo-600" /></Link></div>
        </div>
      
      </div>
    </nav>
  )
}

export default NavbarTwo