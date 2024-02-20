import { Link, useLoaderData } from "react-router-dom"


function Users() {
  const users = useLoaderData();

  return (
    <div className="container mx-auto p-[100px] ">

      <h1 className="text-4xl font-bold text-center mb-3 text-yellow-500"> Total User: {users.length} </h1>
     <div className="flex flex-wrap justify-between">
    
        {
          users.map((user) => {
            const{id, username}=user
            return(
              <div key={id} className="w-[30%] border border-b-lime-500 rounded-lg p-3 mb-3">
                 <h2><span className="font-bold">User id:</span> {id}</h2>
                 <h3 className="mb-4"><span className="font-bold">User name:</span> {username}</h3>
                 <Link to={`/users/${id}`} className="btn2">Details</Link>
              </div>
            )
          })
            
          
        }

        </div>
     </div>

   
  )
}

export default Users