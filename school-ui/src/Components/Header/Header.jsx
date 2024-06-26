import React, { useState } from 'react'
import "./Header.css"
import ReactTypingEffect from 'react-typing-effect'
import { Link } from 'react-router-dom'
import {BiSolidVideos , BiLogIn} from 'react-icons/bi'
import {BsChevronDoubleDown , BsNewspaper} from 'react-icons/bs'
import {FaBars , FaClipboardList} from 'react-icons/fa'
import {AiFillHome , AiOutlineClose , AiOutlineUser} from  'react-icons/ai'
import {HiOutlineClipboardList} from "react-icons/hi"
import Cookies from 'js-cookie';
function Header() {
  const [isOpenHeader , setIsOpenHeader] = useState(false)
  const goToDown = () =>{
    window.scrollBy(0 , 500)
  }
  const openHeader = () =>{
    setIsOpenHeader(true)
  }
  const closeHeader = () =>{
    setIsOpenHeader(false)
  }
  return (
    <header>
      {isOpenHeader && (
      <div className="responsive-menu">
        <AiOutlineClose onClick={closeHeader} className='close-icon'/>
        <ul className='responsive-list'>
          <li><Link to="/"><AiFillHome /> صفحه اصلی</Link></li>
          <li><Link to="/staff"><AiOutlineUser /> فهرست اساتید</Link></li>
          <li><a href="https://royan.adviseman.ir"><BsNewspaper /> آزمون های روانشناسی</a></li>
          <li><a href='https://royan-reserve.ir'><FaClipboardList /> پیش ثبت نام</a></li>
          <li><a href="https://www.planner.gphe.ir/"><HiOutlineClipboardList /> پلنر درسی</a></li>
          <li><Link to={Cookies.get("studentToken") ? '/student-courses' : '/login'}><BiSolidVideos /> ویدیو های آموزشی</Link></li>
          <li><Link to={Cookies.get("adminToken") ? '/admin/home' : '/login'}><BiLogIn /> ورود</Link></li>
        </ul>
      </div>
      )}
        <div className="top-menu">
        <FaBars  className='responsive-icon' onClick={openHeader}/>
            <ul className="list-menu">
               <li className="list-menu-item"><Link to="/">صفحه اصلی</Link></li>
               <li className='list-menu-item'><Link to="/staff">فهرست اساتید</Link></li>
               <li className='list-menu-item'><a href="https://royan.adviseman.ir"> آزمون های روانشناسی</a></li>
               <li className='list-menu-item'><a href='https://royan-reserve.ir'>پیش ثبت نام</a></li>
               <li className='list-menu-item'><a href="https://www.planner.gphe.ir/">پلنر درسی</a></li>
               <li className="list-menu-item list-btn"><Link to={Cookies.get("studentToken") ? '/student-courses' : '/login'}><BiSolidVideos className='list-icon'/> ویدیوهای آموزشی</Link></li>
               <li className="list-menu-item list-btn"><Link to={Cookies.get("adminToken") ? '/admin/home' : '/login'}><BiLogIn className='list-icon'/> ورود</Link></li>
            </ul>
            <img src="./images/logo.webp" alt="school logo"  className='logo'/>
        </div>
        <div className="middle-header">
            <h1 className="header-title">
                دبیرستان زندگی <span className='school-name'>رویان</span>
            </h1>
            <div className='middle-text'>
            <ReactTypingEffect
            text={["دبیرستانی برای همه استعداد ها", "با رویکرد کنکور و آموزش مهارت های زندگی"]}
            />
            </div>
        </div>
        <div className="go-to-down" onClick={goToDown}>
          <BsChevronDoubleDown />
        </div>
    </header>
  )
}

export default Header