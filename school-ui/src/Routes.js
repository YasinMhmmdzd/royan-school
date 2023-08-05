import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Admin from "./Pages/Admin/Admin";
import Students from "./Components/AdminComponents/Students/Students";
import Admins from "./Components/AdminComponents/Admins/Admins";
import AdminLists from "./Components/AdminComponents/Admins/AdminLists/AdminLists";
import AddNewAdmin from "./Components/AdminComponents/Admins/AddNewAdmin/AddNewAdmin";
let pageRoutes = [
    {path:"/" , element:<Home />},
    {path:"/login" , element:<Login />},
    {path:"/admin/*" , element:(
        <>
    <Admin />
        </>
    ) , children : [
        {path:"students" , element:<Students />},
        {path:"admins" , element:<Admins /> , children:[
            {path:"add" , element:<AddNewAdmin />},
            {path:"list" , element:<AdminLists />}
        ]}
    ]}
]
export default pageRoutes