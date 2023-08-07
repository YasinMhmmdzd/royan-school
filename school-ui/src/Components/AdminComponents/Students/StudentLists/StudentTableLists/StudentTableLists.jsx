import React from 'react'
import "./StudentTableLists.css"
function StudentTableLists({fullName , phoneNumber , uniqueCode ,  motherNumber , fatherNumber , Grade , studyField}) {
  return (
                <tr>
                    <td>{fullName}</td>
                    <td>{phoneNumber}</td>
                    <td>{uniqueCode}</td>
                    <td>{motherNumber}</td>
                    <td>{fatherNumber}</td>
                    <td>{Grade}</td>
                    <td>{studyField === '1' ? 'تجربی' : 'ریاضی'}</td>
                </tr>
  )
}

export default StudentTableLists