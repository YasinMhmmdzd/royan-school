import { Outlet } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Admin from "./Pages/Admin/Admin";
import Students from "./Components/AdminComponents/Students/Students";
let pageRoutes = [
    {path:"/" , element:<Home />},
    {path:"/login" , element:<Login />},
    {path:"/admin/*" , element:(
        <>
    <Admin />
        </>
    ) , children : [
        {path:"students" , element:<Students />}
    ]}
]
export default pageRoutes