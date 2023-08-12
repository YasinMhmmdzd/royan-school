import React from 'react'
import staffDatas from './StaffDatas'
import StaffItem from './StaffItem/StaffItem'
import Footer from '../../Components/Footer/Footer'
import "./StaffLists.css"
function StaffLists() {
  return (
    <>    
    <div className="staff-container">
        {staffDatas.map(staff => (
            <StaffItem {...staff}/>
        ))}
    </div>
      <Footer />
    </>
  )
}

export default StaffLists