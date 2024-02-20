import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LayoutOne from './Layout/LayoutOne';
import LayoutTwo from './Layout/LayoutTwo';
import Home from './pages/Home';
import Users from './pages/Users';
import About from './pages/About';
import AllContries from './pages/AllContries';
import ContiesDetails from './pages/ContiesDetails';
import SingleUser from './pages/SingleUser';


function App() {
 const router = createBrowserRouter([
  {
    path:'/',
    element:<LayoutOne/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/users',
        element:<Users/>,
        loader: async () => {
          return fetch("https://jsonplaceholder.typicode.com/users");
        },
      },
      {
        path:'/users/:id',
        element:<SingleUser/>,
        loader: async ({ params }) => {
          return fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
        },
      }
    ]
  },
  {
    path:'/layouttwo',
    element:<LayoutTwo/>,
    children:[
      {
        path:'/layouttwo/about',
        element:<About/>
      },
      {
        path:'/layouttwo/allcontries',
        element:<AllContries/>,
        loader: async () => {
          return fetch("https://restcountries.com/v3.1/all");
        },
      },
      {
        path:'/layouttwo/allcontries/:details',
        element:<ContiesDetails/>,
        loader: async ({ params }) => {
          return fetch(`https://restcountries.com/v3.1/alpha/${params.details}`);
        },
      }
    ]
  }
 ])

  return (
   <>
   <RouterProvider router={router}/>
   </>
  )
}

export default App
