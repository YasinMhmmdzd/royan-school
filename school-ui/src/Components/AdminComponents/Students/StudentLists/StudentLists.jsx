import React ,{ useEffect  , useState } from 'react'
import "./StudentLists.css"
import axios from 'axios'
import Cookies from 'js-cookie'
function StudentLists() {
  

  const [allStudents , setAllStudents] = useState([])


  useEffect(() => {
    axios.get("https://school-node.iran.liara.run/user" , {
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
      <h2>لیست دانش آموزان</h2>
      <table>
        <thead>
          <tr>
          <th>نام و نام خانوادگی</th>
          <th>شماره تلفن</th>
          <th>کد ملی</th>
          <th>شماره همراه پدر</th>
          <th>شماره همراه مادر</th>
          <th>پایه تحصیلی</th>
          <th>رشته</th>
          </tr>
        </thead>
        <tbody>
          {/* {allStudents.map(student => (
          <tr>
          <td>{student.fullName}</td>
          </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  )
}

export default StudentLists