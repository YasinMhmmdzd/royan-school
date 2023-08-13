import React from 'react'
import "./StaffItem.css"
function StaffItem({id  , name , role , image}) {
  return (
    <div key={id} className='staff-item'>

      <div className='right-staff'>

      <h3>{name}</h3>
      <p>{role}</p>

      </div>

      <div className='left-staff'>

        <img src={`./images/staff-images/${image}`} />

      </div>

    </div>
  )
}

export default StaffItem