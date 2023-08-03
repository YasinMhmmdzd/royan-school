import React, { useState } from 'react'
import "./AddNewAdmin.css"
import axios from 'axios'
import Cookies from 'js-cookie'
function AddNewAdmin() {
  const [newAdminFullName ,setNewAdminFullName] = useState('')
  const [newAdminName , setNewAdminName] = useState('')
  const [newAdminPassword , setNewAdminPassword] = useState('')
  const [fetchStatus , setFetchStatus] = useState("")
  const [isSubmitted , setIsSubmitted] = useState(false)
  const newAdminHandler = (e)=>{
    e.preventDefault()
    setIsSubmitted(true)
    if(newAdminFullName.length > 3 && newAdminName.length > 2 && newAdminPassword.length > 8){

      setFetchStatus("pending")
      axios.post("https://school-node.iran.liara.run/admin/signup" , {
        fullName : newAdminFullName ,
        userName : newAdminName ,
        password : newAdminPassword
      } ,{
        headers:{
          token : Cookies.get("adminToken")
        }
      })
      .then((res) =>{
        setFetchStatus(res.data.message)
      })
    
    }
  }
  return (
    <div className='add-admin-container'>
      <h2>اضافه کردن ادمین</h2>
      <form onSubmit={newAdminHandler}>
        <input type="text" className='admin-signup-input' onChange={(e) => setNewAdminFullName(e.target.value)} placeholder='نام و نام خانوادگی'/>
        {(isSubmitted && newAdminFullName.length < 2) && (
          <p className="err">نام باید بیشتر از 2 کاراکتر باشد</p>
        )}
        <input type="text" className='admin-signup-input' onChange={(e) => setNewAdminName(e.target.value)} placeholder='نام کاربری (انگلیسی باشد)'/>
        {(isSubmitted && newAdminName.length < 2) && (
          <p className="err">نام کاربری باید بیشتر از ۲ کاراکتر باشد</p>
        )}
        <input type="password" className='admin-signup-input' onChange={(e) => setNewAdminPassword(e.target.value)} placeholder='رمز عبور‌(بیش از ۸ کاراکتر)'/>
        {(isSubmitted && newAdminPassword.length < 8) && (
          <p className="err">رمز عبور باید بیش از ۸ کاراکتر باشد</p>
        )}
        <button className='signup-btn'>اضافه کردن کاربر</button>
        {fetchStatus === "pending" && (
          <p className="loading">درحال پردازش...</p>
        )}
        {fetchStatus === "admin-not-valid" && (
          <p className="err">شما دسترسی اضافه کردن مدیر را ندارید</p>
        )}
        {fetchStatus === "admin-used" && (
          <p className="err">این نام کاربری مورد استفاده است</p>
        )}
        {fetchStatus === "admin-created" && (
          <p className="success" style={{animation:'none'}}>کاربر جدید ساخته شد</p>
        )}
      </form>
    </div>
  )
}

export default AddNewAdmin