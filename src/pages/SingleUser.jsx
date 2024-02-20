
import { Link } from "react-router-dom"
import { useLoaderData } from "react-router-dom"

function SingleUser() {

  const singleUser = useLoaderData()
 
// console.log(singleUser)
  // const data = singleUser[0]
  // const{id, name, email, phone}= data

  return (
    <div className="container mx-auto py-[100px]">
      <h1 className="text-4xl font-bold text-center mb-6 text-yellow-500">Single User</h1>
     <div className="w-[30%] border border-r-blue-700 p-4 rounded-md items-center ml-[420px] text-center">
      <h2>User id : {singleUser.id}</h2>
      <h3>User name : {singleUser.name}</h3>
      <h4>User email : {singleUser.email}</h4>
      <h5>User phone : {singleUser.phone}</h5>
      <Link to="/users" className="bg-blue-600 py-2 mt-3 text-white rounded-md block text-center ">Back 
         </Link>
     </div>
       
    </div>
  )
}

export default SingleUser