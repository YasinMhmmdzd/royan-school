import React, { useState } from 'react'
import "./Login.css"
function Login() {
    const [studentNationalCode , setStudentNationalCode] = useState("")
    const [studentPhoneNumber , setStudnetPhoneNumber] = useState("")
    const [status , setStatus] = useState("")
    const [isSubmitted , setIsSubmitted] = useState(false)
    const [isStudentActive , setIsStudentActive] = useState(true)
    const [isAdminActive , setIsAdminActive] = useState(false)
    const submitHandler = (e) => {
        e.preventDefault()
        setIsSubmitted(true)
        if(studentNationalCode.length === 10 || studentPhoneNumber.length === 11){
            setStatus("pending")
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
    <div className="login-form-container">
        <div className="login-form">
            <div className="right-login-form">
                    <img src="./images/logo-black.png" alt="لوگوی مدرسه رویان" />
                    <div className="select-role">
                        <button className={isStudentActive ? 'role-btn active' : 'role-btn'} onClick={setStudnetActive}>دانش آموز</button>
                        <button className={isAdminActive ? 'role-btn active' : 'role-btn'} onClick={setAdminActive}>مدیر</button>
                    </div>
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder='کدملی' className='login-input' onChange={(e) =>setStudentNationalCode(e.target.value)}/>
                    {(isSubmitted && studentNationalCode.length !== 10) && (
                        <p className="err">کدملی باید ۱۰ رقم باشد</p>
                    )}
                    <input type="text" placeholder='شماره تلفن' className='login-input' onChange={(e) =>setStudnetPhoneNumber(e.target.value)}/>
                    {(isSubmitted && studentPhoneNumber.length !== 11) && (
                        <p className="err">شماره همراه باید ۱۱رقم باشد</p>
                    )}
                    <button className='login-btn'>ورود</button>
                </form>
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

export default Login