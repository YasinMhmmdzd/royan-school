import React, { useState } from 'react'
import "./AddNewAdmin.css"
import axios from 'axios'
import Cookies from 'js-cookie'
function AddNewAdmin() {
  const [newAdminFullName ,setNewAdminFullName] = useState('')
  const [newAdminName , setNewAdminName] = useState('')
  const [newAdminPassword , setNewAdminPassword] = useState('')
  const [fetchStatus , setFetchStatus] = useState("")
  const newAdminHandler = (e)=>{
    e.preventDefault()
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
      console.log(res);
      setFetchStatus(res.data.message)
    })
  }
  return (
    <div className='add-admin-container'>
      <h2>اضافه کردن ادمین</h2>
      <form onSubmit={newAdminHandler}>
        <input type="text" className='admin-signup-input' onChange={(e) => setNewAdminFullName(e.target.value)} placeholder='نام و نام خانوادگی'/>
        <input type="text" className='admin-signup-input' onChange={(e) => setNewAdminName(e.target.value)} placeholder='نام کاربری (انگلیسی باشد)'/>
        <input type="password" className='admin-signup-input' onChange={(e) => setNewAdminPassword(e.target.value)} placeholder='رمزعبور'/>
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