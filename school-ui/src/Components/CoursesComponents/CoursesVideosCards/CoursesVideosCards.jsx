import React from 'react'
import "./CoursesVideosCards.css"
import {AiOutlineClockCircle} from 'react-icons/ai'
function CoursesVideosCards() {
  return (
    <div className="courses-videos-cards">
        <img src="./images/video-cover.jpg" alt="image cover" className="course-cover" />
        <div className="video-card-body">
            <h3>تیتر ویدیو</h3>
            <p>نام دبیر</p>
        </div>
        <div className="video-card-footer">
            <AiOutlineClockCircle />
            ۱۸/۵/۱۴۰۲
        </div>
    </div>
  )
}

export default CoursesVideosCards