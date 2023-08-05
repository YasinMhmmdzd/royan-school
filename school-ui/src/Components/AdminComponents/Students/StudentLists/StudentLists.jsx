import React ,{ useEffect  , useState } from 'react'
import "./StudentLists.css"
import axios from 'axios'
import Cookies from 'js-cookie'
function StudentLists() {
  

  const [allStudents , setAllStudents] = useState([])


  useEffect(() => {
    axios.get("https://school-node.iran.liara.run/admin/user/getAll" , {
      headers : {
        token : Cookies.get("adminToken")
      }
    }).then((res) => {
      console.log(res);
      setAllStudents(res.data)
    })
  } , [])

  return (
    <div className="student-lists-container">
      
    </div>
  )
}

export default StudentLists