import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import {BsFillCameraVideoFill} from "react-icons/bs"

import "./AdminCourses.css"
import { Link, Outlet, useLocation } from "react-router-dom";
export default function AdminCourses(){

    const pathName = useLocation().pathname
    
    return(
        <>
        
        {
            pathName === "/admin/courses" && (
                <div className="admin-courses-container left-part">

                <div className="admin-courses-item">
                    <Link to="/admin/courses/upload">
                <AiOutlineCloudUpload className="admin-courses-icon"/>
                    آپلود ویدیو
                    
                    </Link>
                </div>
                <div className="admin-courses-item">
                    <Link to="/admin/courses/lists">
                <BsFillCameraVideoFill className="admin-courses-icon"/>
                مشاهده ویدیو ها
                    
                    </Link>
                </div>
        
                </div>
            )
        }

        <Outlet />

        
        </>
    )
}