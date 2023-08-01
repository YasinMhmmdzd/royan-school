import React from 'react'
import "./Students.css"
import { Link } from 'react-router-dom'
import {FaPlus} from 'react-icons/fa'
import {AiFillEdit} from 'react-icons/ai'
function Students() {
  return (
    <div className='left-part studnets-container'>
      <h2>دانش آموزان</h2>
      <div className="student-service-container">
        <div className="student-service">
          <Link to="/">
            <div className="top-service">
          <h3>
            اضافه کردن دانش آموز
          </h3>
          <FaPlus className='student-service-icon'/>
            </div>
          </Link>
        </div>
        <div className="student-service">
          <Link to="/">
          <div className="top-service">
          <h3>
            مشاهده لیست دانش آموزان
          </h3>
          <AiFillEdit className='student-service-icon'/>
              </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Students