import React ,{ useEffect  , useState } from 'react'
import "./StudentLists.css"
import axios from 'axios'
import Cookies from 'js-cookie'
import StudentTableLists from './StudentTableLists/StudentTableLists'
function StudentLists() {
  

  const [allStudents , setAllStudents] = useState([])
  const [newStudents , setNewStudent] = useState([])


  useEffect(() => {
    axios.get("https://school-node.iran.liara.run/admin/user/getAll" , {
      headers : {
        token : Cookies.get("adminToken")
      }
    }).then((res) => {
      setAllStudents(res.data)
    })
  } , [])

  const setFilter = (grade , field) =>{
    let filteredStudents = allStudents.filter(student => student.Grade === grade && student.studyField === field)
    setNewStudent(filteredStudents)
  }

  return (
    <div className="student-lists-container">
      <div className="filter-container">
        <button onClick={() => setFilter("1" , "1")}>کلاس دهم تجربی</button>
        <button onClick={() => setFilter("1" , "2")}>کلاس دهم ریاضی</button>
        <button onClick={() => setFilter("2" , "1")}>کلاس یازدهم تجربی</button>
        <button onClick={() => setFilter("2" , "2")}>کلاس یازدهم ریاضی</button>
        <button onClick={() => setFilter("3" , "1")}>کلاس دوازدهم تجربی</button>
        <button onClick={() => setFilter("3" , "2")}>کلاس دوزادهم ریاضی</button>
      </div>
      <div className="table-container">

      <table>
      <thead>
                <tr>
                    <th>نام و نام خانوادگی</th>
                    <th>نام پدر</th>
                    <th>شماره تلفن</th>
                    <th>کد ملی</th>
                    <th>همراه مادر</th>
                    <th>همراه پدر</th>
                    <th>پایه تحصیلی</th>
                    <th>رشته</th>
                    <th>عملیات</th>
                </tr>
            </thead>
            <tbody>
      {newStudents.map(student => (
        <StudentTableLists key={student._id} {...student}/>
      ))}
            </tbody>
      </table>
      </div>
    </div>
  )
}

export default StudentLists