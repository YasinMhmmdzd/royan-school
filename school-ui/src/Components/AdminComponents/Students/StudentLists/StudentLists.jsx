import React ,{ useEffect  , useState } from 'react'
import "./StudentLists.css"
import axios from 'axios'
import Cookies from 'js-cookie'
import {AiFillDelete} from 'react-icons/ai'
import { Navigate } from 'react-router-dom'

function StudentLists() {
  

  const [allStudents , setAllStudents] = useState([])
  const [newStudents , setNewStudent] = useState([])
  const [fetchDeleteStatus , setFetchDeleteStatus] = useState('')



  useEffect(() => {
    axios.get("https://school-node.iran.liara.run/admin/user/getAll" , {
      headers : {
        token : Cookies.get("adminToken")
      }
    }).then((res) => {
      setAllStudents(res.data)
    })
  } , [fetchDeleteStatus])

  const setFilter = (grade , field) =>{
    let filteredStudents = allStudents.filter(student => student.Grade === grade && student.studyField === field)
    setNewStudent(filteredStudents)
  }


  const deleteStudent = (uniqueCode) =>{
    axios.delete(`https://school-node.iran.liara.run/admin/user/delete/${uniqueCode}` ,{
      headers : {
        token : Cookies.get("adminToken")
      }
    }).then(res => setFetchDeleteStatus(res.data.message))
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
                  {
                    fetchDeleteStatus === "delete-ok" && (
                      <>
                      <p className="success" style={{animation:'none' , textAlign:'center'}}>
                        کاربر حذف شد
                      </p>
                      <Navigate to="/admin/students/list"/>
                      </>
                    )
                  }
                  {
                    fetchDeleteStatus === "admin-not-access" && (
                      <p className="err">
                        شما دسترسی حذف کاربر را ندارید
                      </p>
                    )
                  }
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
                  <tr>
                    <td>{student.fullName}</td>
                      <td>{student.fatherName}</td>
                      <td>{student.phoneNumber}</td>
                      <td>{student.uniqueCode}</td>
                      <td>{student.motherNumber}</td>
                      <td>{student.fatherNumber}</td>
                      <td>{student.Grade === '1' && ('دهم')}
                    {student.Grade === '2' && ('یازدهم')}
                    {student.Grade === '3' && ('دوزادهم')}
                    </td>
                   <td>{student.studyField === '1' ? 'تجربی' : 'ریاضی'}</td>
                   <td><AiFillDelete title='حذف ادمین' className='opreation-icon delete-icon' onClick={() => deleteStudent(student.uniqueCode)}/></td>
                            </tr>
      ))}
            </tbody>
      </table>
      </div>
    </div>
  )
}

export default StudentLists