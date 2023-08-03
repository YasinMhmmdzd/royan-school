import React from 'react'

function AddNewStudent() {
  
  return (
    <div className="add-students-container">
      <h2>اضافه کردن دانش آموز</h2>
      <form>
      <input type="text" className='student-signup-input' onChange={(e) => setStudentFullName(e.target.value)} placeholder='نام و نام خانوادگی'/>
      <input type="text" className='student-signup-input' onChange={(e) => setStudentPhoneNumber(e.target.value)} placeholder='شماره تلفن همراه'/>
      <input type="text" className='student-signup-input' onChange={(e) => setStudentNatioanlCode(e.target.value)} placeholder='شماره ملی'/>
      <input type="text" className='student-signup-input' onChange={(e) => setStudentMotherPhoneNumber(e.target.value)} placeholder='شماره همراه مادر'/>
      <input type="text" className='student-signup-input' onChange={(e) => setStudentFatherNumber(e.target.value)} placeholder='شماره همراه پدر'/>
      <select onChange={(e) => setStudentGrade(e.target.value)}>
        <option value="10">دهم</option>
        <option value="11">یازدهم</option>
        <option value="12">دوازدهم</option>
      </select>
      </form>
    </div>
  )
}

export default AddNewStudent