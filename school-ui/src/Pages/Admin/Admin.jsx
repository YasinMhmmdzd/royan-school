import React, { useEffect, useState } from 'react'
import "./Admin.css"
import axios from 'axios'
import RightNav from '../../Components/AdminComponents/RightNav/RightNav'
import adminContext from '../../Contexts/AdminContexts'
import { Navigate, Outlet } from 'react-router-dom'
import Cookies from 'js-cookie'
function Admin() {

  const [verifyStatus , setVerifyStatus] = useState('')
  const [adminInfos , setAdminInfos] = useState({})


  async function fetchData(){
    await axios.get("https://school-node.iran.liara.run/admin" , {
      headers:{
        token : Cookies.get("adminToken")
      }
    }).then(
      (res)=>{
        setVerifyStatus(res.data.message)
        setAdminInfos(res.data.admin)
      }
    )
  }


  useEffect(()=>{
    fetchData()
  },[] )

  return (
    <>

    {
      verifyStatus === "token-error" && (
        <Navigate to="/login" />
      )
    }

    {verifyStatus === "verify-ok" && (
      <adminContext.Provider value={adminInfos}>

    <div className="admin-container">
        <RightNav adminName={adminInfos.fullName}/>
        <Outlet />
    </div>

      </adminContext.Provider>
    )}
    </>
  )
}

export default Admin