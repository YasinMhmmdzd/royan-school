import React from 'react'
import "./RightNav.css"
import { Link } from 'react-router-dom'
import {FaUsers} from 'react-icons/fa'
import {BsFillKeyFill} from 'react-icons/bs'
import {AiFillSetting} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
function RightNav() {
  return (
    <div className="right-nav">
      <div className="top-right-nav">
        <img src="../images/logo-black.png" alt="لوگوی دبیرستان رویان" />
        <ul className="list-menu-admin">
          <li className="list-menu-item-admin"><Link to="/" className='list-link'><FaUsers className='list-icon'/> دانش آموزان</Link></li>
          <li className="list-menu-item-admin"><Link to="/" className='list-link'><BsFillKeyFill className='list-icon'/>مدیران</Link></li>
          <li className="list-menu-item-admin"><Link to="/" className='list-link'><AiFillSetting className='list-icon'/> تنظیمات</Link></li>
        </ul>
      </div>
      <div className="bottom-right-nav">
        <Link className='logout-link'><FiLogOut /> خروج</Link>
      </div>
    </div>
  )
}

export default RightNav