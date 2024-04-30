import { Link } from "react-router-dom"
import { useLoaderData } from "react-router-dom"

function ContiesDetails() {
  const countryDetails = useLoaderData()
  const data = countryDetails[0]
  const{capital, name, population, flags}= data

  return (
    <main className="container mx-auto  text-center py-[100px]">
      <div className="w-[30%] mb-10 border border-r-blue-700 p-4 rounded-md items-center ml-[400px]">
        <h2 className="text-lg font-bold">Common Name: <span className="font-normal">{name.common}</span></h2>
        <h2 className="text-lg font-bold">Offical Name: <span className="font-normal">{name.official}</span></h2>
        <h3 className="text-lg font-bold">Capital: <span className="font-normal">{capital}</span></h3>
        <h4 className="text-lg font-bold mb-4">Population: <span className="font-normal">{population}</span></h4>
        <img className="ml-3" src={flags.png} alt={flags.alt}/>

        <Link to="/layouttwo/allcontries" className="bg-blue-600 py-2 mt-3 text-white rounded-md block text-center ">Back 
         </Link>
      </div>

    </main>
  )
}

export default ContiesDetails