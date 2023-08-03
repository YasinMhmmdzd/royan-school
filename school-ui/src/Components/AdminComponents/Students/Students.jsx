import React from 'react'
import "./Students.css"
import { Link , Outlet, useLocation } from 'react-router-dom'
import {FaPlus} from 'react-icons/fa'
import {AiFillEdit} from 'react-icons/ai'
function Students() {
  const pathName = useLocation().pathname
  return (
    <>
    {pathName === "/admin/students" && (
    <div className='left-part studnets-container'>
      <h2>دانش آموزان</h2>
      <div className="student-service-container">
        <div className="student-service">
          <Link to="/admin/students/add">
            <div className="top-service">
          <h3>
            اضافه کردن دانش آموز
          </h3>
          <FaPlus className='student-service-icon'/>
            </div>
          </Link>
        </div>
        <div className="student-service">
          <Link to="/admin/students/list">
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
    )}
    <Outlet />
    </>
  )
}

export default Students