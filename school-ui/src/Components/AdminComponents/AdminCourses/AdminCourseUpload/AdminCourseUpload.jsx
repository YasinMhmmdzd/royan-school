import React, { useState } from 'react'
import { AiOutlineCloudUpload } from "react-icons/ai";
import "./AdminCourseUpload.css"
import cookies from 'js-cookie'
import axios from 'axios';
function AdminCourseUpload() {

    const [appendedFile , setAppendedFile] = useState(null)
    const [videoTitle , setVideoTitle] = useState("")
    const [videoName , setVideoName] = useState("")
    const [videoGrade , setVideoGrade] = useState("")
    const [videoField , setVideoField] = useState("")
    const [videoStatus , setVideoStatus] = useState("")
    const [submitted , setSubmitted] = useState(false)

    const videoData = new FormData()


    videoData.append('file' , appendedFile)
    videoData.append("title" , videoTitle)
    videoData.append("name" , videoName)
    videoData.append("grade" , videoGrade)
    videoData.append("studyField" , videoField)
    

    const uploadFileHandler = (event)=>{
        event.preventDefault()
        setSubmitted(true)
        if(appendedFile !== null && videoTitle.length > 0 && videoName.length > 0 && videoField.length > 0 && videoGrade.length > 0){
            setVideoStatus("pending")
            axios.post("https://school-node.iran.liara.run/videos/upload" , videoData , {
                headers : {
                    token : cookies.get("adminToken"),
                    'Content-Type': 'multipart/form-data',
                }
            }).then(res => setVideoStatus(res.data.message))
        }

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
            {(submitted && appendedFile === null) && (
                <p className="err">فایل خالی است!</p>
            )}
            {appendedFile !== null&& (
                appendedFile.name
            )}

            <input type="text" className='video-input' placeholder='نام فایل' onChange={(e) => setVideoName(e.target.value)}/>
            {(submitted && videoName.length <= 0) && (
                <p className='err'>نام فایل را وارد کنید</p>
            )}
            <input type="text" className='video-input' placeholder='تیتر ویدیو' onChange={(e) => setVideoTitle(e.target.value)} />‌
            {
                ((submitted && videoTitle.length <=0) && (
                    <p className='err'>تیتر ویدیو را وارد کنید</p>
                ))
            }‌
            <select className='video-select' onChange={(e) => setVideoGrade(e.target.value)}>
                <option value="">پایه تحصیلی</option>
                <option value="1">دهم</option>
                <option value="2">یازدهم</option>
                <option value="3">دوازدهم</option>
            </select>
            {
                (submitted && videoGrade.length <= 0) && (
                    <p className='err'>پایه تحصیلی ویدیو را وارد کنید</p>
                )
            }
            <select className='video-select' onChange={(e) => setVideoField(e.target.value)}>
                <option value="">رشته</option>
                <option value="1">ریاضی</option>
                <option value="2">تجربی</option>
            </select>
            {
                (submitted && videoField.length <= 0) && (
                    <p className='err'>رشته ویدیو را وارد کنید</p>
                )
            }
            <button className='upload-video-button'>ارسال فایل</button>
            {(submitted && videoStatus === "pending") && (
                <p className="loading" style={{textAlign:'center'}}>درحال پردازش ...</p>
            )}
            {
                (submitted && videoStatus === "input-not-valid") && (
                    <p className="err">مقادیر ورودی معتبر نیست</p>
                )
            }
            {
                (submitted && videoStatus === "success") && (
                    <p className="success" style={{textAlign:'center' , animation:'none'}}>آپلود ویدیو انجام شد</p>
                )
            }
        </form>

    </div>
  )
}

export default AdminCourseUpload