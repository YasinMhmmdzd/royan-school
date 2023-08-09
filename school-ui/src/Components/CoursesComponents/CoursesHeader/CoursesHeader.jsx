import React, { useState } from 'react'
import "./CoursesHeader.css"
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft , AiOutlineUser } from 'react-icons/ai' 
import {BiLogOut} from 'react-icons/bi'

function CoursesHeader() {

    const [isOpenInfoBox , setIsOpenInfoBox] = useState(false)

  return (

    <div className="courses-header">

        <div className="student-info-box" onClick={() => setIsOpenInfoBox(prev => !prev)}>
            <p>
                <AiOutlineUser />
                یاسین محمدزاده
            </p>
            {isOpenInfoBox && (

            <div className="student-info-sub-box">
                <Link to="/">
                    <BiLogOut />
                    خروج
                    </Link>
            </div>

            )}
        </div>

        <div className="go-to-home">

        <Link to="/">
            <AiOutlineArrowLeft />
        </Link>

        </div>
    </div>

  )
}

export default CoursesHeader