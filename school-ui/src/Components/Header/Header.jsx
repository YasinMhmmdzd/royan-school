import React, { useState } from 'react'
import "./Header.css"
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom'
import {BiSolidVideos , BiLogIn} from 'react-icons/bi'
import {BsChevronDoubleDown} from 'react-icons/bs'
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from  'react-icons/ai'
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
      <img src="./images/logo-blck.png" alt="school logo"  className='logo'/>
        <ul className='responsive-list'>
          <li>صفحه اصلی</li>
          <li>پیش ثبت نام</li>
          <li><BiSolidVideos /> ویدیو های آموزشی</li>
          <li><BiLogIn /> ورود مدیر</li>
        </ul>
      </div>
      )}
        <div className="top-menu">
        <FaBars  className='responsive-icon' onClick={openHeader}/>
            <ul className="list-menu">
               <li className="list-menu-item"><Link to="/">صفحه اصلی</Link></li>
               <li className="list-menu-item"><Link to="/">پیش ثبت نام</Link></li>
               <li className="list-menu-item list-btn"><Link to="/"><BiSolidVideos className='list-icon'/> ویدیوهای آموزشی</Link></li>
               <li className="list-menu-item list-btn"><Link to="/"><BiLogIn className='list-icon'/> ورود مدیر</Link></li>
            </ul>
            <img src="./images/logo.png" alt="school logo"  className='logo'/>
        </div>
        <div className="middle-header">
            <h1 className="header-title">
                دبیرستان زندگی <span className='school-name'>رویان</span>
            </h1>
            <p className='middle-text'>
            <Typewriter
 
            onInit={(typewriter) => {
            typewriter
         .typeString("دبیرستانی برای همه استعداد ها")
         .pauseFor(1000)
         .deleteAll()
         .typeString("با محوریت کنکور و آموزش مهارت های زندگی")
         .start();
 }}
/>
            </p>
        </div>
        <div className="go-to-down" onClick={goToDown}>
          <BsChevronDoubleDown />
        </div>
    </header>
  )
}

export default Header