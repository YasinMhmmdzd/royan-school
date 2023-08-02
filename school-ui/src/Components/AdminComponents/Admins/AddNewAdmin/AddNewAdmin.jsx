import React, { useState } from 'react'
import "./AddNewAdmin.css"
import { useContext } from 'react'
import adminContext from '../../../../Contexts/AdminContexts'
function AddNewAdmin() {
  const adminInfos = useContext(adminContext)
  const [newAdminFullName ,setNewAdminFullName] = useState('')
  const [newAdminName , setNewAdminName] = useState('')
  const [newAdminPassword , setNewAdminPassword] = useState('')
  const newAdminHandler = (e)=>{
    e.preventDefault()
  }
  return (
    <div className='add-admin-container'>
      <h2>اضافه کردن ادمین</h2>
      <form onSubmit={newAdminHandler}>
        <input type="text" className='admin-signup-input' placeholder='نام و نام خانوادگی'/>
        <input type="text" className='admin-signup-input' placeholder='نام کاربری (انگلیسی باشد)'/>
        <input type="password" className='admin-signup-input' placeholder='رمزعبور'/>
        <button className='signup-btn'>اضافه کردن کاربر</button>
      </form>
    </div>
  )
}

export default AddNewAdmin