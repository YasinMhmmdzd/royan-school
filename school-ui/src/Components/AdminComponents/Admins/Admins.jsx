import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import {FaPlus} from 'react-icons/fa'
import {AiFillEdit} from 'react-icons/ai'
import "./Admins.css"
function Admins() {
  const pathName = useLocation().pathname
  return (
    <>
    {pathName === "/admin/admins" && (
    <div className='left-part admins-container'>
        <h2>مدیران</h2>
        <div className="admin-service-container">
        <div className="admin-service">
          <Link to="/admin/admins/add">
            <div className="top-service">
          <h3>
            اضافه کردن مدیر
          </h3>
          <FaPlus className='admin-service-icon'/>
            </div>
          </Link>
        </div>
        <div className="admin-service">
          <Link to="/">
          <div className="top-service">
          <h3>
            مشاهده لیست مدیران
          </h3>
          <AiFillEdit className='admin-service-icon'/>
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

export default Admins