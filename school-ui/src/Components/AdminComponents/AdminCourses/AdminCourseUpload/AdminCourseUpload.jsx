import React, { useState } from 'react'
import { AiOutlineCloudUpload } from "react-icons/ai";
import "./AdminCourseUpload.css"
function AdminCourseUpload() {

    const [appendedFileName , setAppendedFileName] = useState("")

    const uploadFileHandler = (event)=>{

        const videoData = new FormData()

        videoData.append('file' , event.target.files[0])

    }

  return (
    <div className='admin-courses-upload left-part'>

        <h2>فایل دوره را آپلود کنید</h2>
        <form className='admin-course-upload-form' onSubmit={uploadFileHandler}>

            <label className='upload-video-lable'>
                
            <input type="file" className='upload-video-input' style={{color:'blue'}} onChange={(event) => setAppendedFileName(event.target.files[0].name)}/>
            <AiOutlineCloudUpload />
            آپلود فایل
            </label>

            {appendedFileName}
            <button className='upload-video-button'>ارسال فایل</button>
        </form>

    </div>
  )
}

export default AdminCourseUpload