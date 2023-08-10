import React, { useEffect, useState } from 'react'
import "./AdminInfo.css"
import axios from 'axios'
import Cookies from 'js-cookie'
function AdminInfo() {
  const [adminInfos , setAdminInfos] = useState([])
  useEffect( ()=>{
    axios.get("https://school-node.iran.liara.run/admin/getInfo" , {
      headers :{
        token : Cookies.get("adminToken")
      }
    }).then((res) => {
      setAdminInfos(res.data)
    })
  } , [] )
  return (
    <div className='left-part admin-info-container'>
        <div className="admin-info-item">
            <h3>تعداد دانش آموزان</h3>
            <p>{adminInfos.userCount}</p>
        </div>
        <div className="admin-info-item">
            <h3>تعداد مدیران</h3>
            <p>{adminInfos.adminCount}</p>
        </div>
    </div>
  )
}

export default AdminInfo