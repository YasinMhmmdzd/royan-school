import React, { useEffect, useState } from 'react'
import { useParams , Link } from 'react-router-dom'
import Cookies from "js-cookie"
import axios from "axios"
import "./CoursesVideo.css"
import {MdSchool} from 'react-icons/md'
import {AiOutlineArrowLeft} from 'react-icons/ai'


function CoursesVideo() {
    const [videoInfos , setVideoInfos] = useState([])
    const routePath = useParams().name


    useEffect(()=>{


      axios.get(`https://school-node.iran.liara.run/videos/link/${routePath}` , {
        headers :{
          token : Cookies.get("studentToken")
        }
      }).then(res => setVideoInfos(res.data))



    } , [])
    
  return (
    <>
    
    <div className='video-container'>
      <Link className='back-link' to="/student-courses">
        <AiOutlineArrowLeft />
      </Link>
      <h2> {videoInfos.title} </h2>
      <video onContextMenu={(e) => e.preventDefault()} src={videoInfos.link} controls controlsList="nodownload" className='video'>
        <source src={videoInfos.link}/>
      </video>
      <p><MdSchool />
      {videoInfos.grade === "1" && ("دهم")}
      {videoInfos.grade === "2" && ("یازدهم")}
      {videoInfos.grade === "3" && ("دوازدهم")}
       -
        {videoInfos.studyField === "1" ? 'تجربی' : 'ریاضی'}
        </p>
    </div>

    </>
  )
}

export default CoursesVideo