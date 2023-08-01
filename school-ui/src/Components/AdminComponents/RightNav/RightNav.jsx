import React, { useState } from 'react'
import "./RightNav.css"
import Cookies from 'js-cookie'
import { Link, Navigate } from 'react-router-dom'
import {FaUsers , FaHome} from 'react-icons/fa'
import {BsFillKeyFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import {BiSolidVideos} from 'react-icons/bi'
function RightNav() {
  const [navigateOk , setNavigateOk] = useState(false)
  const logOutAdmin = () =>{
    Cookies.remove("adminToken")
    setNavigateOk(true)
  }
  return (
    <>
    {navigateOk && (
      <Navigate to="/login" />
    )}
    {!navigateOk && (
    <div className="right-nav">
      <div className="top-right-nav">
        <img src="../images/logo-black.png" alt="لوگوی دبیرستان رویان" />
        <ul className="list-menu-admin">
        <li className="list-menu-item-admin"><Link to="/" className='list-link'><FaHome className='list-icon'/> صفحه اصلی</Link></li>
          <li className="list-menu-item-admin"><Link to="/admin/students" className='list-link'><FaUsers className='list-icon'/> دانش آموزان</Link></li>
          <li className="list-menu-item-admin"><Link to="/admin/admins" className='list-link'><BsFillKeyFill className='list-icon'/>مدیران</Link></li>
          <li className="list-menu-item-admin"><Link to="/admin/courses" className='list-link'><BiSolidVideos className='list-icon'/> دوره های آموزشی</Link></li>
        </ul>
      </div>
      <div className="bottom-right-nav">
        <Link className='logout-link' onClick={logOutAdmin}><FiLogOut /> خروج</Link>
      </div>
    </div>
    )}
    </>
  )
}

export default RightNav