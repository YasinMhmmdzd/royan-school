import React from 'react'
import "./AddNewAdmin.css"
import { useContext } from 'react'
import adminContext from '../../../../Contexts/AdminContexts'
function AddNewAdmin() {
  const adminInfos = useContext(adminContext)
  return (
    <div className='add-admin-container'>
      <h2>اضافه کردن ادمین</h2>
      <form>
        <input type="text" className='admin-signup-input' placeholder='نام و نام خانوادگی'/>
        <input type="text" className='admin-signup-input' placeholder='نام کاربری (انگلیسی باشد)'/>
        <input type="password" className='admin-signup-input' placeholder='رمزعبور'/>
        <button className='signup-btn'>اضافه کردن کاربر</button>
      </form>
    </div>
  )
}

export default AddNewAdmin