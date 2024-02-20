import { Link, } from "react-router-dom"
import { useLoaderData } from "react-router-dom"
import Countries from "../components/Countries"


function AllContries() {
const allcountry =useLoaderData()

  return (
    <main className="py-[50px] container mx-auto">
      <h1 className="text-blue-700 text-4xl uppercase  font-bold text-center mb-8">All Country: {allcountry.length}</h1>

      <div className="flex justify-between flex-wrap">
       {
        allcountry.map((country, i)=> <Countries key={i} country={country}></Countries>)
       }
      </div>
    </main>
  )
}

export default AllContries