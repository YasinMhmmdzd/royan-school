import React from 'react'
import "./CoursesHeader.css"
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai' 

function CoursesHeader() {
  return (

    <div className="courses-header">

        <div className="student-info-box">
            <p>یاسین محمدزاده</p>
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