import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Cookies from "js-cookie"
import axios from "axios"

function CoursesVideo() {
    const [videoInfos , setVideoInfos] = useState([])
    const routePath = useParams().name


    useEffect(()=>{
      axios.get(`https://school-node.iran.liara.run/videos/link/${routePath}` , {
        headers :{
          token : Cookies.get("studentToken")
        }
      }).then(res => setVideoInfos(res.data.link))
    } , [])

  return (
    <div>
      <video onContextMenu={(e) => e.preventDefault()} src={videoInfos} controls controlsList="nodownload" className='video'>
        <source src={videoInfos}/>
      </video>
    </div>
  )
}

export default CoursesVideo