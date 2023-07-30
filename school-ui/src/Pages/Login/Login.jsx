import React from 'react'
import "./Login.css"
function Login() {
  return (
    <div className="login-form-container">
        <div className="login-form">
            <div className="right-login-form">
                    <img src="./images/logo-black.png" alt="لوگوی مدرسه رویان" />
                    <div className="select-role">
                        <button>دانش آموز</button>
                        <button>مدیر</button>
                    </div>
                <form>
                    <input type="text" placeholder='کدملی' className='login-input'/>
                    <input type="text" placeholder='شماره تلفن' className='login-input'/>
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