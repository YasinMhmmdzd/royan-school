import React from 'react'
import "./StudentTableLists.css"
import { AiFillDelete } from 'react-icons/ai'
function StudentTableLists({fullName, fatherName , phoneNumber , uniqueCode ,  motherNumber , fatherNumber , Grade , studyField}) {
  return (
                <tr>
                    <td>{fullName}</td>
                    <td>{fatherName}</td>
                    <td>{phoneNumber}</td>
                    <td>{uniqueCode}</td>
                    <td>{motherNumber}</td>
                    <td>{fatherNumber}</td>
                    <td>{Grade === '1' && ('دهم')}
                    {Grade === '2' && ('یازدهم')}
                    {Grade === '3' && ('دوزادهم')}
                    </td>
                    <td>{studyField === '1' ? 'تجربی' : 'ریاضی'}</td>
                    <td><AiFillDelete title='حذف ادمین' className='opreation-icon error-icon' onClick={() => deleteStudent(uniqueCode)}/></td>
                </tr>
  )
}

export default StudentTableLists