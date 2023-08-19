import React from 'react'
import { AiOutlineCloudUpload } from "react-icons/ai";
import "./AdminCourseUpload.css"
function AdminCourseUpload() {
  return (
    <div className='admin-courses-upload left-part'>

        <h2>فایل دوره را آپلود کنید</h2>
        <form className='admin-course-upload-form'>

            <label className='upload-video-lable'>
                
            <input type="file" className='upload-video-input' style={{color:'blue'}}/>
            <AiOutlineCloudUpload />
            فایل را آپلود کنید
            </label>
        </form>

    </div>
  )
}

export default AdminCourseUpload