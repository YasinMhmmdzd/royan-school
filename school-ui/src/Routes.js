import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Admin from "./Pages/Admin/Admin";
import Students from "./Components/AdminComponents/Students/Students";
import Admins from "./Components/AdminComponents/Admins/Admins";
import AdminLists from "./Components/AdminComponents/Admins/AdminLists/AdminLists";
import AddNewAdmin from "./Components/AdminComponents/Admins/AddNewAdmin/AddNewAdmin";
import AddNewStudent from "./Components/AdminComponents/Students/AddNewStudent/AddNewStudent";
import StudentLists from "./Components/AdminComponents/Students/StudentLists/StudentLists";
let pageRoutes = [
    {path:"/" , element:<Home />},
    {path:"/login" , element:<Login />},
    {path:"/student-courses" , element:<StudentCourses />},
    {path:"/admin/*" , element:(
        <>
    <Admin />
        </>
    ) , children : [
        {path:"students" , element:<Students /> , children:[
            {path:"add" , element:<AddNewStudent />} , 
            {path:"list" , element:<StudentLists />}
        ]},
        {path:"admins" , element:<Admins /> , children:[
            {path:"add" , element:<AddNewAdmin />},
            {path:"list" , element:<AdminLists />}
        ]}
    ]}
]
export default pageRoutes