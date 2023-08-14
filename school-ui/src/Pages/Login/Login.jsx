import React, { useEffect, useState } from 'react'
import "./Login.css"
import axios from 'axios'
import Cookies from 'js-cookie'
import { Link, Navigate } from 'react-router-dom'
import {AiOutlineArrowLeft} from 'react-icons/ai'

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
    const [userLoggedIn , setUserLoggedIn] = useState(false)
    const [studentLoggedIn , setStudentLoggedIn] = useState(false)
    const [isStudentInputPersian , setIsStudentInputPersian] = useState(false)


    useEffect(() => {

        document.title = "ورود | دبیرستان زندگی رویان"

        if(Cookies.get("adminToken")){
            setUserLoggedIn(true)
        }
        if(Cookies.get("studentToken")){
            setStudentLoggedIn(true)
        }
    } ,[])


    const submitStudentHandler = (e) => {
        e.preventDefault()
        setIsStudentSubmitted(true)
        let pattern = /[۰-۹]/g
        let nationalCodeResult = studentNationalCode.match(pattern)
        let phoneNumberResult = studentPhoneNumber.match(pattern)
        if(studentNationalCode.length === 10 && studentPhoneNumber.length === 11 ){


            if(nationalCodeResult === null && phoneNumberResult === null){

                setStudentStatus("pending")
                axios.post("https://school-node.iran.liara.run/login/user" , {
                    uniqueCode : studentNationalCode , 
                    phoneNumber : studentPhoneNumber
                }).then(
                    (res) => {
                        setStudentStatus(res.data.message)
                        if(res.data.message === "success"){
                            Cookies.set("studentToken" , res.data.token , {expires: 14})
                        }
                    }
                )


            }
            else{
                setIsStudentInputPersian(true)
            }
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
            <Navigate to="/admin/home" />
        )
        
    }


    {
        studentLoggedIn && (
            <Navigate to="/student-courses" />
        )
    }


    {
        (!userLoggedIn || !studentLoggedIn) && (
    <div className="login-form-container">
        <div className="login-form">
            <div className="return-container">
                <Link to="/">
                <AiOutlineArrowLeft />
                </Link>
            </div>
            <div className="right-login-form">
                    <img src="./images/logo-black.webp" alt="لوگوی مدرسه رویان" />
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
                    <button className='login-btn' disabled={studentStatus === "pending" ? true : false}>ورود</button>
                    {(isStudentSubmitted && studentStatus === "pending") && (
                        <p className="loading">درحال پردازش ...</p>
                    )}
                    {
                        (isStudentSubmitted && studentStatus === "success") && (
                            <>
                            <p className="success">در حال انتقال به صفحه ویدیو ها</p>
                            <Navigate to="/student-courses" />
                            </>
                        )
                    }
                    {
                        (isStudentSubmitted && studentStatus === "not-valid") && (
                            <p className="err">دانش آموزی با این کد ملی وجود ندارد</p>
                        )
                    }
                    {
                    (isStudentSubmitted && isStudentInputPersian) && (
                        <p className="err">
                            لطفا زبان کیبورد را انگلیسی کنید
                        </p>
                    )
                    }
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
                         <button className='login-btn' disabled={adminStatus === "pending" ? true : false} onClick={() => console.log('clicked')}>ورود</button>
                         {(isAdminSubmitted && adminStatus === "pending") && (
                        <p className="loading">درحال پردازش ...</p>
                    )}
                            {(isAdminSubmitted && adminStatus === "success") && (
                                <>
                                <p className="success">در حال انتقال به پنل ...</p>
                                <Navigate to="/admin/home" />
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
                    آینده از اینجا آغاز می شود
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