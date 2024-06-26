import axios from 'axios'
import Cookies from 'js-cookie'
import "./StudentCourses.css"
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import CoursesHeader from '../../../Components/CoursesComponents/CoursesHeader/CoursesHeader'
import studentInfosContext from '../../../Contexts/StudentContexts'
import CoursesVideosCards from '../../../Components/CoursesComponents/CoursesVideosCards/CoursesVideosCards'
function StudentCourses() {

  const [studentInfos , setStudentInfos] = useState([])
  const [verifyStatus , setVerifyStatus] = useState('')
  const [allVideos , setAllVideos] = useState([])

  async function fetchData(){
    await axios.get("https://school-node.iran.liara.run/user" , {
      headers : {
        token : Cookies.get("studentToken")
      }
    }).then((res) => {
        setVerifyStatus(res.data.message)
        setStudentInfos(res.data.user)
    })
  }

  useEffect(()=>{
    fetchData()
    document.title ="دوره های آموزشی | دبیرستان زندگی رویان"


    axios.get("https://school-node.iran.liara.run/user/getvideos" , {
      headers : {
        token : Cookies.get("studentToken")
      }
    }).then(res => setAllVideos(res.data.list))


  } , [])


  return (
    <>


    {
      verifyStatus === "token-error" && (
        <Navigate to="/login" />
      )
    }

    {verifyStatus === "verify-ok" && (

      <studentInfosContext.Provider value={studentInfos}>

      <div className="student-courses">
        <CoursesHeader />
        <div className="courses-videos-container">
          {allVideos.map(video => (

          <CoursesVideosCards key={video.id} {...video}/>

          ))}
        </div>
      </div>

      </studentInfosContext.Provider>
      
    )}

    
    </>
  )
}

export default StudentCourses