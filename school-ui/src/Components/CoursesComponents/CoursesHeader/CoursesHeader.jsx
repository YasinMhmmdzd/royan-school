import React, { useState , useContext } from 'react'
import "./CoursesHeader.css"
import { Link, Navigate } from 'react-router-dom'
import { AiOutlineArrowLeft , AiOutlineUser } from 'react-icons/ai' 
import {BiLogOut} from 'react-icons/bi'
import Cookies from 'js-cookie'
import studentInfosContext from '../../../Contexts/StudentContexts'

function CoursesHeader() {

    const [isOpenInfoBox , setIsOpenInfoBox] = useState(false)
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

        <div className="student-info-box" onClick={() => setIsOpenInfoBox(prev => !prev)}>
            <p>
                <AiOutlineUser />
                {studentInfos.fullName}
            </p>
            {isOpenInfoBox && (

            <div className="student-info-sub-box">
                <button onClick={() => logOutStudent}>
                    <BiLogOut />
                    خروج
                </button>
            </div>

            )}
        </div>

        <div className="go-to-home">

        <Link to="/">
            <AiOutlineArrowLeft />
        </Link>

        </div>
    </div>

    </>


  )
}

export default CoursesHeader