import React from 'react'
import staffDatas from './StaffDatas'
import StaffItem from './StaffItem/StaffItem'
function StaffLists() {
  return (
    <div className="staff-container">
        {staffDatas.map(staff => (
            <StaffItem />
        ))}
    </div>
  )
}

export default StaffLists