import React, { useEffect, useState } from 'react'
import "./AdminLists.css"
import {AiFillDelete} from 'react-icons/ai'
import Cookies from 'js-cookie'
import axios from 'axios'
import { Navigate } from 'react-router-dom'


function AdminLists() {


  const [allAdmins , setAllAdmins] = useState([])
  const [fetchDeleteStatus , setFetchDeleteStatus] = useState("")


  useEffect(()=> {
    axios.get("https://school-node.iran.liara.run/admin/getAll" , {
      headers :{
        token :  Cookies.get("adminToken")
      }
    })
    .then((res) => {
      setAllAdmins(res.data)
    })
  } , [fetchDeleteStatus])


  const deleteUser = (userName) => {
    axios.delete(`https://school-node.iran.liara.run/admin/delete/${userName}` , {
      headers : {
        token : Cookies.get("adminToken")
      }
    }).then(
      (res) => {
        setFetchDeleteStatus(res.data.message)
      }
    )
  }


  return (


    <div className="admin-lists-container">
      <h2>لیست مدیران</h2>
      {
        fetchDeleteStatus === "delete-ok" && (
          <>
          <p className="success" style={{animation:'none' , textAlign:'center'}}>
            کاربر حذف شد
          </p>
          <Navigate to="/admin/admins/list"/>
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
      <div className="table-container">

      <table>
        <thead>
          <tr>
          <td>ردیف</td>
          <th>نام و نام خانوادگی</th>
          <th>نام کاربری</th>
          <th>نقش</th>
          <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {
            allAdmins.map((admin , index) => (
              <tr key={admin._id}>
                <td>{index + 1}</td>
                <td>{admin.fullName}</td>
                <td>{admin.userName} @</td>
                <td>{admin.role === "admin" ? 'ادمین' : 'سوپر ادمین'}</td>
                <td>
              <AiFillDelete title='حذف ادمین' className='opreation-icon error-icon' onClick={() => deleteUser(admin.userName)}/>
            </td>
              </tr>
            ))
          }

        </tbody>
      </table>
      </div>
    </div>
  )
}

export default AdminLists