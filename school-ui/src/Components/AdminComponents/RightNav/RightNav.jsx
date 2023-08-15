import React, { useState } from 'react'
import "./RightNav.css"
import Cookies from 'js-cookie'
import { Link, Navigate } from 'react-router-dom'
import {FaUsers , FaHome} from 'react-icons/fa'
import {BsFillKeyFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import {BiSolidVideos} from 'react-icons/bi'
function RightNav({adminName}) {
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
        <img src="../images/logo-black.webp" alt="لوگوی دبیرستان رویان" />
        <h5>سلام {adminName}</h5>
        <ul className="list-menu-admin">
        <Link to="/" className='list-link'><li className="list-menu-item-admin"><FaHome className='list-icon'/> صفحه اصلی</li></Link>
        <Link to="/admin/students" className='list-link'><li className="list-menu-item-admin"><FaUsers className='list-icon'/> دانش آموزان</li></Link>
        <Link to="/admin/admins" className='list-link'><li className="list-menu-item-admin"><BsFillKeyFill className='list-icon'/>مدیران</li></Link>
        <Link to="/admin/courses" className='list-link'><li className="list-menu-item-admin"><BiSolidVideos className='list-icon'/> دوره های آموزشی</li></Link>
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