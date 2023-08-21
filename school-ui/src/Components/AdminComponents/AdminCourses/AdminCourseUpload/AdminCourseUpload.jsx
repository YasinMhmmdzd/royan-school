import React, { useState } from 'react'
import { AiOutlineCloudUpload } from "react-icons/ai";
import "./AdminCourseUpload.css"
import axios from 'axios';
function AdminCourseUpload() {

    const [appendedFile , setAppendedFile] = useState("")
    const [videoTitle , setVideoTitle] = useState("")
    const [videoName , setVideoName] = useState("")
    const [videoGrade , setVideoGrade] = useState("")
    const [videoField , setVideoField] = useState("")

    const videoData = new FormData()


    videoData.append('file' , appendedFile)
    videoData.append("title" , videoTitle)
    videoData.append("name" , videoName)
    videoData.append("grade" , videoGrade)
    videoData.append("studyField" , videoField)
    

    const uploadFileHandler = (event)=>{
        event.preventDefault()

        axios.post("https://school-node.iran.liara.run/videos/upload" , videoData , {
            headers : {

                'Content-Type': 'multipart/form-data',
            }
        }).then(res => console.log(res))
    }

  return (
    <div className='admin-courses-upload left-part'>

        <h2>فایل دوره را آپلود کنید</h2>
        <form className='admin-course-upload-form' onSubmit={uploadFileHandler}>

            <label className='upload-video-lable'>
                
            <input type="file" className='upload-video-input' accept='.mp4' style={{color:'blue'}} onChange={(event)=>setAppendedFile(event.target.files[0])}/>
            <AiOutlineCloudUpload />
            آپلود فایل
            </label>

            <input type="text" className='video-input' placeholder='نام فایل' onChange={(e) => setVideoTitle(e.target.value)}/>
            <input type="text" className='video-input' placeholder='تیتر ویدیو' onChange={(e) => setVideoName(e.target.value)} />‌
            <select className='video-select' onChange={(e) => setVideoGrade(e.target.value)}>
                <option value="">---</option>
                <option value="1">دهم</option>
                <option value="2">یازدهم</option>
                <option value="3">دوازدهم</option>
            </select>
            <select className='video-select' onChange={(e) => setVideoField(e.target.value)}>
                <option value="">---</option>
                <option value="1">ریاضی</option>
                <option value="2">تجربی</option>
            </select>
            <button className='upload-video-button'>ارسال فایل</button>

        </form>

    </div>
  )
}

export default AdminCourseUpload