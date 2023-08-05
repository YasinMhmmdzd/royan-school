import React, { useState } from 'react'
import "./AddNewStudent.css"
import axios from 'axios'
import Cookies from 'js-cookie'
function AddNewStudent() {


  const [studentFullName , setStudentFullName] = useState('')
  const [studentPhoneNumber , setStudentPhoneNumber] = useState('')
  const [studentNationalCode , setStudentNationalCode] = useState('')
  const [studentMohterPhoneNumber , setStudentMotherPhoneNumber] = useState('')
  const [studentFatherNumber , setStudentFatherNumber] = useState('')
  const [studentGrade , setStudentGrade] = useState('')
  const [studentField , setStudentField] = useState("")
  const [submitted , setSubmitted] = useState(false)

  const newStudentHandler = (e) => {
    e.preventDefault()
    console.log("fullName : " , studentFullName);
    console.log("phoneNumber : " , studentPhoneNumber);
    console.log("uniqueCode : " , studentNationalCode);
    console.log("motherNumber : " , studentMohterPhoneNumber);
    console.log("fatherNumber : " , studentFatherNumber);
    console.log("Grade : " , studentGrade);
    console.log("studyField : " , studentField);
    axios.post("https://school-node.iran.liara.run/admin/user/signup" , {
      fullName : studentFullName ,
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
    }).then(res => console.log(res))
  }


  return (


    <div className="add-student-container">
      <h2>اضافه کردن دانش آموز</h2>
      <form onSubmit={newStudentHandler}>
      <input type="text" className='student-signup-input' onChange={(e) => setStudentFullName(e.target.value)} placeholder='نام و نام خانوادگی'/>
      <input type="text" className='student-signup-input' onChange={(e) => setStudentPhoneNumber(e.target.value)} placeholder='شماره تلفن همراه'/>
      <input type="text" className='student-signup-input' onChange={(e) => setStudentNationalCode(e.target.value)} placeholder='شماره ملی'/>
      <input type="text" className='student-signup-input' onChange={(e) => setStudentMotherPhoneNumber(e.target.value)} placeholder='شماره همراه مادر'/>
      <input type="text" className='student-signup-input' onChange={(e) => setStudentFatherNumber(e.target.value)} placeholder='شماره همراه پدر'/>
      پایه تحصیلی :
      <select className='student-signup-select' onChange={(e) => setStudentGrade(e.target.value)}>
        <option value="">−−−−</option>
        <option value="1">دهم</option>
        <option value="2">یازدهم</option>
        <option value="3">دوازدهم</option>
      </select>
      <br />
      رشته تحصیلی :‌
      <select className='student-signup-select' onChange={(e) => setStudentField(e.target.value)}>
        <option value="1">تجربی</option>
        <option value="2">ریاضی</option>
      </select>
      <button className='signup-btn'>اضافه کردن کاربر</button>
      </form>
    </div>

    
  )
}

export default AddNewStudent