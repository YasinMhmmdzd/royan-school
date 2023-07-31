import { Outlet } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Admin from "./Pages/Admin/Admin";
let pageRoutes = [
    {path:"/" , element:<Home />},
    {path:"/login" , element:<Login />},
    {path:"/admin/*" , element:(
        <>
    <Admin />
    <Outlet />
        </>
    ) , children : [
        {path:"test" , element:<p>testelement</p>}
    ]}
]
export default pageRoutes