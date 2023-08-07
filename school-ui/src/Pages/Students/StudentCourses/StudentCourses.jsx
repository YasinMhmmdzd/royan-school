import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

function StudentCourses() {

  const [studentInfos , setStudentInfos] = useState([])
  const [verifyStatus , setVerifyStatus] = useState('')


  async function fetchData(){
    await axios.get("https://school-node.iran.liara.run/user" , {
      headers : {
        token : Cookies.get("studentToken")
      }
    }).then((res) => {
        setVerifyStatus(res.data.message)
        setStudentInfos(res.data.user)
    })
  }

  useEffect(()=>{
    fetchData()
  })


  return (
    <>


    {
      verifyStatus === "token-error" && (
        <Navigate to="/login" />
      )
    }

    {verifyStatus === "verify-ok" && (
    <div>StudentCourses</div>
    )}

    
    </>
  )
}

export default StudentCourses