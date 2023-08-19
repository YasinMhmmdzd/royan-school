import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import {BsFillPencilFill} from "react-icons/bs"

import "./AdminCourses.css"
import { Link } from "react-router-dom";
export default function AdminCourses(){
    return(
        <div className="admin-courses-container left-part">

        <div className="admin-courses-item">
            <Link>
        <AiOutlineCloudUpload />
            آپلود ویدیو
            
            </Link>
        </div>
        <div className="admin-courses-item">
            <Link>
        <BsFillPencilFill />
        مشاهده ویدیو ها
            
            </Link>
        </div>

        </div>
    )
}