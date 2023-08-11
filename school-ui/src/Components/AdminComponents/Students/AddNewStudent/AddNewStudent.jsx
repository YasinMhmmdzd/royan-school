import React, { useState } from 'react'
import "./AddNewStudent.css"
import axios from 'axios'
import Cookies from 'js-cookie'
function AddNewStudent() {


  const [studentFullName , setStudentFullName] = useState('')
  const [studentFatherName , setStudentFatherName] = useState('')
  const [studentPhoneNumber , setStudentPhoneNumber] = useState('')
  const [studentNationalCode , setStudentNationalCode] = useState('')
  const [studentMohterPhoneNumber , setStudentMotherPhoneNumber] = useState('')
  const [studentFatherNumber , setStudentFatherNumber] = useState('')
  const [studentGrade , setStudentGrade] = useState('')
  const [studentField , setStudentField] = useState("")
  const [fetchStatus , setFetchStatus] = useState('')
  const [submitted , setSubmitted] = useState(false)

  const newStudentHandler = (e) => {
    e.preventDefault()
    setSubmitted(true)
    if(studentNationalCode.length === 10 && studentPhoneNumber.length === 11 && studentMohterPhoneNumber.length === 11 && studentFatherNumber.length === 11 && studentField !== "" && studentGrade !==""){
      setFetchStatus('pending')
      axios.post("https://school-node.iran.liara.run/admin/user/signup" , {
        fullName : studentFullName ,
        fatherName : studentFatherName,
        phoneNumber : studentPhoneNumber , 
        uniqueCode : studentNationalCode ,
        motherNumber : studentMohterPhoneNumber ,
        fatherNumber : studentFatherNumber , 
        Grade : studentGrade , 
        studyField : studentField
      } ,{
        headers : {
          token : Cookies.get("adminToken")
        }
      }).then(
        (res) => {
          setFetchStatus(res.data.message)
        }
      )
    }
  }


  return (


    <div className="add-student-container">
      <h2>اضافه کردن دانش آموز</h2>
      <form onSubmit={newStudentHandler}>
      <input type="text" className='student-signup-input' onChange={(e) => setStudentFullName(e.target.value)} placeholder='نام و نام خانوادگی'/>
      <input type="text" className='student-signup-input' onChange={(e) => setStudentFatherName(e.target.value)} placeholder='نام پدر'/>
      <input type="text" className='student-signup-input' onChange={(e) => setStudentPhoneNumber(e.target.value)} placeholder='شماره تلفن همراه'/>
      {(submitted && studentPhoneNumber.length !== 11) && (
        <p className="err">شماره موبایل باید ۱۱ رقم باشد</p>
      )}
      <input type="text" className='student-signup-input' onChange={(e) => setStudentNationalCode(e.target.value)} placeholder='شماره ملی'/>
      {(submitted && studentNationalCode.length !== 10) && (
        <p className="err">شماره ملی باید ۱۰ رقم باشد</p>
      )}
      <input type="text" className='student-signup-input' onChange={(e) => setStudentMotherPhoneNumber(e.target.value)} placeholder='شماره همراه مادر'/>
      {
        (submitted && studentMohterPhoneNumber.length !== 11) && (
          <p className="err">شماره همراه باید ۱۰ رقم باشد</p>
        )
      }
      <input type="text" className='student-signup-input' onChange={(e) => setStudentFatherNumber(e.target.value)} placeholder='شماره همراه پدر'/>
      {
        (submitted && studentFatherNumber.length !== 11) && (
          <p className="err">شماره همراه باید ۱۰ رقم باشد</p>
        )
      }
      پایه تحصیلی :
      <select className='student-signup-select' onChange={(e) => setStudentGrade(e.target.value)}>
        <option value="">−−−−</option>
        <option value="1">دهم</option>
        <option value="2">یازدهم</option>
        <option value="3">دوازدهم</option>
      </select>
      {
        (submitted && studentGrade === '') && (
          <p className="err">پایه تحصیلی را وارد کنید</p>
        )
      }
      <br />
      رشته تحصیلی :‌
      <select className='student-signup-select' onChange={(e) => setStudentField(e.target.value)}>
        <option value="">----</option>
        <option value="1">تجربی</option>
        <option value="2">ریاضی</option>
      </select>
      {
        (submitted && studentField === '') && (
          <p className="err">رشته را وارد کنید</p>
        )
      }
      <button className='signup-btn' disabled={fetchStatus === "pending" ? true : false}>اضافه کردن کاربر</button>
      {fetchStatus === "pending" && (
        <p className="loading"> درحال پردازش...</p>
      )}
      {fetchStatus === "user-created" && (
        <p className="success">دانش آموز اضافه شد</p>
      )}
      {
        fetchStatus === "user-used" && (
          <p className="err">این کد ملی قبلا در سیستم ثبت شده</p>
        )
      }
      </form>
    </div>

    
  )
}

export default AddNewStudent