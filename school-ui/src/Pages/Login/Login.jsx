import React, { useEffect, useState } from 'react'
import "./Login.css"
import axios from 'axios'
import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'


function Login() {


    const [studentNationalCode , setStudentNationalCode] = useState("")
    const [studentPhoneNumber , setStudnetPhoneNumber] = useState("")
    const [studentStatus , setStudentStatus] = useState("")
    const [adminStatus , setAdminStatus] = useState("")
    const [isStudentSubmitted , setIsStudentSubmitted] = useState(false)
    const [isStudentActive , setIsStudentActive] = useState(true)
    const [isAdminActive , setIsAdminActive] = useState(false)
    const [adminUserName , setAdminUserName] = useState("")
    const [adminUserPassword , setAdminUserPassword] = useState("")
    const [isAdminSubmitted , setIsAdminSubmitted] = useState(false)
    const [adminToken , setAdminToken] = useState('')
    const [userLoggedIn , setUserLoggedIn] = useState(false)


    useEffect(() => {
        if(Cookies.get("adminToken")){
            setUserLoggedIn(true)
        }
    } ,[])


    const submitStudentHandler = (e) => {
        e.preventDefault()
        setIsStudentSubmitted(true)
        if(studentNationalCode.length === 10 && studentPhoneNumber.length === 11){
            setStudentStatus("pending")
        }
    }


    const submitAdminHandler = (e) =>{
        e.preventDefault()
        setIsAdminSubmitted(true)
        if(adminUserName.length > 2 && adminUserPassword.length > 1){
            setAdminStatus("pending")
            axios.post("https://school-node.iran.liara.run/login/admin" , {
                userName : adminUserName ,
                password : adminUserPassword
            }).then(
                (res) => {
                    setAdminStatus(res.data.message)
                    setAdminToken(res.data.token)
                    if(res.data.message == "success"){
                        Cookies.set('adminToken' , res.data.token , { expires: 14 })
                    }
                }
            )
            
        }
    }


    const setAdminActive = () => {
        setIsAdminActive(true)
        setIsStudentActive(false)
    }


    const setStudnetActive =() =>{
        setIsAdminActive(false)
        setIsStudentActive(true)
    }


  return (
    <>


    {
        userLoggedIn && (
            <Navigate to="/admin" />
        )
    }


    {
        !userLoggedIn && (
    <div className="login-form-container">
        <div className="login-form">
            <div className="right-login-form">
                    <img src="./images/logo-black.png" alt="لوگوی مدرسه رویان" />
                    <div className="select-role">
                        <button className={isStudentActive ? 'role-btn active' : 'role-btn'} onClick={setStudnetActive}>دانش آموز</button>
                        <button className={isAdminActive ? 'role-btn active' : 'role-btn'} onClick={setAdminActive}>مدیر</button>
                    </div>
                    {isStudentActive && (
                <form onSubmit={submitStudentHandler}>
                    <input type="text" placeholder='کدملی' className='login-input' onChange={(e) =>setStudentNationalCode(e.target.value)}/>
                    {(isStudentSubmitted && studentNationalCode.length !== 10) && (
                        <p className="err">کدملی باید ۱۰ رقم باشد</p>
                    )}
                    <input type="text" placeholder='شماره تلفن' className='login-input' onChange={(e) =>setStudnetPhoneNumber(e.target.value)}/>
                    {(isStudentSubmitted && studentPhoneNumber.length !== 11) && (
                        <p className="err">شماره همراه باید ۱۱رقم باشد</p>
                    )}
                    <button className='login-btn'>ورود</button>
                    {(isStudentSubmitted && studentStatus === "pending") && (
                        <p className="loading">درحال پردازش ...</p>
                    )}
                </form>
                    )}
                    {isAdminActive && (
                        <form onSubmit={submitAdminHandler}>
                       <input type="text" placeholder='نام کاربری' className='login-input' onChange={(e) =>setAdminUserName(e.target.value)}/>
                        {(isAdminSubmitted && adminUserName.length < 2) && (
                         <p className="err">نام کاربری باید بیشتر از ۲ کاراکتر باشد</p>
                        )}
                        <input type="password" placeholder='رمز عبور' className='login-input' onChange={(e) =>setAdminUserPassword(e.target.value)}/>
                        {(isAdminSubmitted && adminUserPassword.length < 1) && (
                        <p className="err">رمز عبور باید بیشتر از ۸کاراکتر باشد</p>
                        )}
                         <button className='login-btn'>ورود</button>
                         {(isAdminSubmitted && adminStatus === "pending") && (
                        <p className="loading">درحال پردازش ...</p>
                    )}
                            {(isAdminSubmitted && adminStatus === "success") && (
                                <>
                                <p className="success">در حال انتقال به پنل ...</p>
                                <Navigate to="/admin" />
                                </>
                    )}
                                   {(isAdminSubmitted && adminStatus === "not-valid") && (
                                <>
                                <p className="err">کاربری پیدا نشد</p>
                                </>
                    )}
                        </form>
                    )}
            </div>
            <div className="left-login-form">
                <h1>
                    دبیرستان رویان راهی برای پیشرفت
                </h1>
            </div>
        </div>
    </div>
        )
    }
    </>
  )
}

export default Login