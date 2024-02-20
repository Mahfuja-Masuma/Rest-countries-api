import { Link } from "react-router-dom"

function Countries({country}) {
    const {name, capital, cca2} = country
  return (
 
         <div className="w-[30%] mb-10 border border-r-blue-700 p-2 rounded-md ">
         <h2 className="text-black font-bold">Name: <span className="font-normal">{name.common}</span> </h2>
         <h3 className="text-black  font-bold">Official Name: <span className="font-normal">{name.official}</span> </h3>
         <h4 className="text-black  font-bold">Capital: <span className="font-normal">{capital}</span> </h4>
         <Link to={`/layouttwo/allcontries/${cca2}`} className="bg-blue-600 py-2 mt-3 text-white rounded-md block text-center ">Details 
         <span className="text-red-500 font-bold ml-2">{cca2}</span></Link>
        </div>
     
  )
}

export default Countries