import React from 'react'
import "./Admin.css"
import RightNav from '../../Components/AdminComponents/RightNav/RightNav'
import { Outlet } from 'react-router-dom'
function Admin() {
  return (
    <div className="admin-container">
        <RightNav />
        <Outlet />
    </div>
  )
}

export default Admin