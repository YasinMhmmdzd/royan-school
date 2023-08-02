import React from 'react'
import "./AdminLists.css"
import {AiFillDelete , AiFillEdit} from 'react-icons/ai'
function AdminLists() {
  return (
    <div className="admin-lists-container">
      <h2>لیست مدیران</h2>
      <table>
        <thead>
          <tr>
          <th>نام و نام خانوادگی</th>
          <th>نام کاربری</th>
          <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>یاسین محمدزاده</td>
            <td dir='ltr'>@mmd</td>
            <td>
              <AiFillDelete className='opreation-icon error-icon'/>
              <AiFillEdit className='opreation-icon edit-icon'/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AdminLists