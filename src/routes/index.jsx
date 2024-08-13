import {useRoutes} from "react-router-dom";
import { Suspense,lazy } from "react";
const Home=lazy(()=> import  ("./home/Home"))  ;
const Auth=lazy(()=> import ("./auth/Auth"))


const RouteController = () => {
  return useRoutes([
    {
        path:"",
        element:<Suspense fallback={<p>Loading...</p>}><Home/></Suspense>
    } ,  
    {
        path:"auth",
        element: <Suspense fallback={<p>Loading...</p>}></Suspense>
    }
  ])
     
}

export default RouteController