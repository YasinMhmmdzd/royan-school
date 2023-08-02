import React, { useEffect, useState } from 'react'
import "./Admin.css"
import axios from 'axios'
import RightNav from '../../Components/AdminComponents/RightNav/RightNav'
import { Navigate, Outlet } from 'react-router-dom'
import Cookies from 'js-cookie'
function Admin() {

  const [verifyStatus , setVerifyStatus] = useState('')
  const [adminInfos , setAdminInfos] = useState({})

  useEffect(()=>{
    axios.get("https://school-node.iran.liara.run/admin" , {
      headers:{
        token : Cookies.get("adminToken")
      }
    }).then(
      (res)=>{
        setVerifyStatus(res.data.message)
        setAdminInfos(res.data.admin)
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

    {verifyStatus === "verify-ok" && (
    <div className="admin-container">
        <RightNav adminName={adminInfos.fullName}/>
        <Outlet />
    </div>
    )}
    </>
  )
}

export default Admin