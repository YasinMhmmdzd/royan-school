import React, { useEffect, useState } from 'react'
import "./CoursesVideosCards.css"
import { Link } from 'react-router-dom'

function CoursesVideosCards({name, title , grade , stydyField}) {

  return (
    <Link className='card-links' to={`/student-courses/video/${name}`}>
    
    <div className="courses-videos-cards">
        <img src="./images/video-cover.jpg" alt="image cover" className="course-cover" />
        <div className="video-card-body">
            <h3>{title}</h3>
            <p>
              {grade === "1" && (" دهم ")}
              {grade === "2" && (" یازدهم ")}
              {grade === "3" && (" دوازدهم ")}
              -
              {stydyField === "1" ? " تجربی " : " ریاضی "}
            </p>
        </div>
    </div>
    
    </Link>
  )
}

export default CoursesVideosCards