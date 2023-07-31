import React from 'react'
import "./Admin.css"
import pageRoutes from '../../Routes'
import RightNav from '../../Components/AdminComponents/RightNav/RightNav'
function Admin() {
  return (
    <div className="admin-container">
        <RightNav />
    </div>
  )
}

export default Admin