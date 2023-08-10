import React, { useState , useContext } from 'react'
import "./CoursesHeader.css"
import { Link, Navigate } from 'react-router-dom'
import { AiOutlineArrowLeft , AiOutlineUser } from 'react-icons/ai' 
import {BiLogOut} from 'react-icons/bi'
import Cookies from 'js-cookie'
import studentInfosContext from '../../../Contexts/StudentContexts'

function CoursesHeader() {

    const [isNavigate , setIsNavigate] = useState(false)
    const studentInfos = useContext(studentInfosContext)

    const logOutStudent = () =>{
        Cookies.remove("studentToken")
        setIsNavigate(true)
    }

  return (

    <>
    {
        isNavigate && (
            <Navigate to="/" />
        )
    }
    
    <div className="courses-header">

        <div className="student-info-box">
            <p>
                <AiOutlineUser />
                {studentInfos.fullName}
            </p>
        </div>

        <div className="go-to-home">

        <div className="logout-box" onClick={() => logOutStudent()}>
            <BiLogOut />
            خروج
        </div>

        <Link to="/">
            <AiOutlineArrowLeft />
        </Link>

        </div>
    </div>

    </>


  )
}

export default CoursesHeader