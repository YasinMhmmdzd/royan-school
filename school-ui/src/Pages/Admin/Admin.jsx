import React, { useEffect, useState } from 'react'
import "./Admin.css"
import axios from 'axios'
import RightNav from '../../Components/AdminComponents/RightNav/RightNav'
import { Navigate, Outlet } from 'react-router-dom'
import Cookies from 'js-cookie'
function Admin() {
  const [verifyStatus , setVerifyStatus] = useState('')
  useEffect( ()=>{
    axios.get("https://school-node.iran.liara.run/admin" , {
      headers:{
        token : Cookies.get("adminToken")
      }
    }).then(
      (res)=>{
        setVerifyStatus(res.data.message)
      }
    )
  },[] )
  return (
    <>
    {
      verifyStatus === "token-error" && (
        <Navigate to="/login" />
      )
    }
    <div className="admin-container">
        <RightNav />
        <Outlet />
    </div>
    </>
  )
}

export default Admin