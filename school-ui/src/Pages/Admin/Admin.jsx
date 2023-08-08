import React, { useEffect, useState } from 'react'
import "./Admin.css"
import axios from 'axios'
import RightNav from '../../Components/AdminComponents/RightNav/RightNav'
import { Link, Navigate, Outlet } from 'react-router-dom'
import Cookies from 'js-cookie'
import {AiOutlineClose} from 'react-icons/ai'
import { FaBars , FaHome , FaUsers } from 'react-icons/fa'
import { BsFillKeyFill } from 'react-icons/bs'
import { BiSolidVideos } from 'react-icons/bi'
function Admin() {

  const [isOpenMenu , setIsOpenMenu] = useState(false)
  const [verifyStatus , setVerifyStatus] = useState('')
  const [adminInfos , setAdminInfos] = useState({})


  async function fetchData(){
    await axios.get("https://school-node.iran.liara.run/admin" , {
      headers:{
        token : Cookies.get("adminToken")
      }
    }).then(
      (res)=>{
        setVerifyStatus(res.data.message)
        setAdminInfos(res.data.admin)
      }
    )
  }


  useEffect(()=>{
    fetchData()
  },[] )

  return (
    <>

    {
      verifyStatus === "token-error" && (
        <Navigate to="/login" />
      )
    }

    {verifyStatus === "verify-ok" && (

    <div className="admin-container">
        <RightNav adminName={adminInfos.fullName}/>
        <FaBars  className='responsive-burger-icon' onClick={() => setIsOpenMenu(true)}/>
        {isOpenMenu && (
        <div className="right-responsive-menu">
          <ul className="responsive-list">
            <AiOutlineClose className='close-icon' onClick={()=> setIsOpenMenu(false)}/>
            <li className="responsive-list-item"><Link to="/" onClick={() => setIsOpenMenu(false)}><FaHome className='list-icon'/> صفحه اصلی</Link></li>
            <li className='responsive-list-item'><Link to="/admin/students" onClick={() => setIsOpenMenu(false)}><FaUsers className='list-icon'/> دانش آموزان</Link></li>
            <li className='responsive-list-item'><Link to="/admin/admins" onClick={() => setIsOpenMenu(false)}><BsFillKeyFill className='list-icon'/>مدیران</Link></li>
            <li className='responsive-list-item'><Link to="/admin/courses" onClick={() => setIsOpenMenu(false)}><BiSolidVideos className='list-icon'/> دوره های آموزشی</Link></li>
            <li className='responsive-list-item logout-item'><Link to="" onClick={() => setIsOpenMenu(false)}>خروج</Link></li>
          </ul>
        </div>
        )}
        <Outlet />
    </div>

    )}
    </>
  )
}

export default Admin