import React, { useEffect } from 'react'
import staffDatas from './StaffDatas'
import StaffItem from './StaffItem/StaffItem'
import Footer from '../../Components/Footer/Footer'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import "./StaffLists.css"
import { Link } from 'react-router-dom'
function StaffLists() {
  useEffect(()=>{
    document.title = "اساتید و کارکنان |‌دبیرستان زندگی رویان"
  } , [])
  return (
    <> 
    <div className="staff-lists">
      <div className="staff-header">
        <Link to="/">
      <AiOutlineArrowLeft className='staff-exit-icon'/>
        </Link>
      </div>


    <div className="staff-container">
        {staffDatas.map(staff => (
            <StaffItem {...staff}/>
        ))}
    </div>
    </div>
      <Footer />
    </>
  )
}

export default StaffLists