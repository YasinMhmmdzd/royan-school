import React, { useEffect } from 'react'
import "./AdminCoursesLists.css"
import axios from 'axios'
import Cookies from 'js-cookie'
function AdminCoursesLists() {


  useEffect(()=>{
    axios.get("https://school-node.iran.liara.run/videos/list" , {

      headers:{
        token : Cookies.get("adminToken")
      }

    }).then(res => console.log(res))

  },[])

  return (
    <div className='admin-courses-lists left-part'>
      <h2>فهرست ویدیو ها</h2>

      <table>
        <thead>
        <tr>

        <th>تیتر ویدیو</th>
        <th>پایه تحصیلی ویدیو</th>
        <th>رشته</th>
        <th>عملیات</th>

        </tr>

        </thead>
        <tbody>

        <tr>
          td
        </tr>

        </tbody>
      </table>

    </div>
  )
}

export default AdminCoursesLists