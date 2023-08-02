import React, { useEffect, useState } from 'react'
import "./AdminLists.css"
import {AiFillDelete , AiFillEdit} from 'react-icons/ai'
import Cookies from 'js-cookie'
import axios from 'axios'
function AdminLists() {
  const [allAdmins , setAllAdmins] = useState([])
  const deleteUser = (userName) => {
    axios.delete(`https://school-node.iran.liara.run/admin/delete/${userName}` , {
      headers : {
        token : Cookies.get("adminToken")
      }
    }).then(res => console.log(res))
  }
  useEffect(()=> {
    axios.get("https://school-node.iran.liara.run/admin/getAll" , {
      headers :{
        token :  Cookies.get("adminToken")
      }
    })
    .then((res) => {
      console.log(res);
      setAllAdmins(res.data)
    })
  } , [])
  return (
    <div className="admin-lists-container">
      <h2>لیست مدیران</h2>
      <table>
        <thead>
          <tr>
          <th>نام و نام خانوادگی</th>
          <th>نام کاربری</th>
          <th>نقش</th>
          <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {
            allAdmins.map(admin => (
              <tr key={admin._id}>

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
  )
}

export default AdminLists