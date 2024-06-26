import React, { useEffect, useState } from 'react'
import {Navigate} from 'react-router-dom'
import "./AdminCoursesLists.css"
import axios from 'axios'
import Cookies from 'js-cookie'
import {AiFillDelete} from "react-icons/ai"
function AdminCoursesLists() {

  const [allVideos , setAllVideos] = useState([])
  const [deleteStatus , setDeleteStatus] = useState("")

  useEffect(()=>{
    axios.get("https://school-node.iran.liara.run/videos/list" , {

      headers:{
        token : Cookies.get("adminToken")
      }

    }).then(res => setAllVideos(res.data.list))

  },[deleteStatus])


  const deleteVideo = (videoName) => {
    axios.delete(`https://school-node.iran.liara.run/videos/delete/${videoName}` , {

      headers : {
        token : Cookies.get("adminToken")
      }

    }).then(res => setDeleteStatus(res.data.message))
  }

  return (
    <div className='admin-courses-lists left-part'>
      <h2>فهرست ویدیو ها</h2>

      {
        deleteStatus === "success" && (
          <>
          <p className="success" style={{animation:'none' , textAlign:'center'}}>
           ویدیو حذف شد
          </p>
          <Navigate to="/admin/courses/lists" />
          </>
        )
      }

      <table>
        <thead>
        <tr>

        <th>تیتر ویدیو</th>
        <th>نام ویدیو</th>
        <th>پایه تحصیلی ویدیو</th>
        <th>رشته</th>
        <th>عملیات</th>

        </tr>

        </thead>
        <tbody>

          {
            allVideos.map(video => (
              <tr key={video.id}>
              
              
              <td>{video.title}</td>
              <td>{video.name}</td>
              <td>
                {video.grade === "1" && ("دهم")}
                {video.grade === "2" && ("یازدهم")}
                {video.grade === "3" && ("دوازدهم")}
                </td>
              <td>{video.studyField === "1" ? "تجربی"  : "ریاضی"}</td>
              <td><AiFillDelete title='حذف ویدیو' className='opreation-icon delete-icon' onClick={() => deleteVideo(video.name)} /></td>
              </tr>
            ))
          }

        </tbody>
      </table>

    </div>
  )
}

export default AdminCoursesLists