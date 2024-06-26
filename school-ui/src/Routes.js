import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Admin from "./Pages/Admin/Admin";
import Students from "./Components/AdminComponents/Students/Students";
import Admins from "./Components/AdminComponents/Admins/Admins";
import AdminLists from "./Components/AdminComponents/Admins/AdminLists/AdminLists";
import AddNewAdmin from "./Components/AdminComponents/Admins/AddNewAdmin/AddNewAdmin";
import AddNewStudent from "./Components/AdminComponents/Students/AddNewStudent/AddNewStudent";
import StudentCourses from "./Pages/Students/StudentCourses/StudentCourses";
import StudentLists from "./Components/AdminComponents/Students/StudentLists/StudentLists";
import AdminInfo from "./Components/AdminComponents/AdminInfo/AdminInfo";
import StaffLists from "./Pages/StaffLists/StaffLists";
import AdminCourses from "./Components/AdminComponents/AdminCourses/AdminCourses";
import AdminCourseUpload from "./Components/AdminComponents/AdminCourses/AdminCourseUpload/AdminCourseUpload";
import AdminCoursesLists from "./Components/AdminComponents/AdminCourses/AdmnCoursesLists/AdminCoursesLists";
import CoursesVideo from "./Components/CoursesComponents/CoursesVideo/CoursesVideo";



let pageRoutes = [
    {path:"/" , element:<Home />},
    {path:"/login" , element:<Login />},
    {path:"/student-courses" , element:<StudentCourses />},
    {path:"/student-courses/video/:name" , element:<CoursesVideo />},
    {path:"/staff" , element:<StaffLists />},
    {path:"/admin/*" , element:(<Admin />) , children : [
        {path:"students" , element:<Students /> , children:[
            {path:"add" , element:<AddNewStudent />} , 
            {path:"list" , element:<StudentLists />}
        ]},
        {path:"courses" , element:<AdminCourses /> , children:[
            {path: "upload" , element:<AdminCourseUpload />},
            {path:"lists" , element:<AdminCoursesLists />}
        ]},
        {path: "home" , element:<AdminInfo />},
        {path:"admins" , element:<Admins /> , children:[
            {path:"add" , element:<AddNewAdmin />},
            {path:"list" , element:<AdminLists />}
        ]}
    ]}
]
export default pageRoutes