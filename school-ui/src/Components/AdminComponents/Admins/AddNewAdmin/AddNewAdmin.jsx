import React, { useState } from 'react'
import "./AddNewAdmin.css"
import axios from 'axios'
import Cookies from 'js-cookie'
function AddNewAdmin() {
  const [newAdminFullName ,setNewAdminFullName] = useState('')
  const [newAdminName , setNewAdminName] = useState('')
  const [newAdminPassword , setNewAdminPassword] = useState('')
  const newAdminHandler = (e)=>{
    e.preventDefault()
    axios.post("https://school-node.iran.liara.run/admin/signup" , {
      fullName : newAdminFullName ,
      userName : newAdminName ,
      password : newAdminPassword
    } ,{
      headers:{
        token : Cookies.get("adminToken")
      }
    })
    .then(res => console.log(res))
  }
  return (
    <div className='add-admin-container'>
      <h2>اضافه کردن ادمین</h2>
      <form onSubmit={newAdminHandler}>
        <input type="text" className='admin-signup-input' onChange={(e) => setNewAdminFullName(e.target.value)} placeholder='نام و نام خانوادگی'/>
        <input type="text" className='admin-signup-input' onChange={(e) => setNewAdminName(e.target.value)} placeholder='نام کاربری (انگلیسی باشد)'/>
        <input type="password" className='admin-signup-input' onChange={(e) => setNewAdminPassword(e.target.value)} placeholder='رمزعبور'/>
        <button className='signup-btn'>اضافه کردن کاربر</button>
      </form>
    </div>
  )
}

export default AddNewAdmin