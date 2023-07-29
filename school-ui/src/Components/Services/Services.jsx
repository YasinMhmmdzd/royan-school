import React from 'react'
import "./Services.css"
import {PiLightbulbFilamentDuotone} from 'react-icons/pi'
import {IoIosSchool} from 'react-icons/io'
import {FaRegClipboard} from 'react-icons/fa'
import {BiFootball} from 'react-icons/bi'
function Services() {
  return (
    <div className="services">

        <h1 className="serveices-title">خدمات دبیرستان</h1>
        <div className="services-container">

        <div className="service-item">
            <div className="icon-container firth-icon">
                <PiLightbulbFilamentDuotone />
            </div>
            <h2 className="service-title">تجهیزات نوین</h2>
            <div className="service-description">
                <p>ثبت هوشمند ورود و خروج دانش آموزان با ارایه گزارش پیامکی به والدین</p>
                <p>سالن مطالعه اختصاصی با امکانات رفاهی</p>
            </div>
        </div>

        <div className="service-item">
        <div className="icon-container second-icon">
                <IoIosSchool />
            </div>
            <h2 className="service-title">خدمات مشاوره</h2>
            <div className="service-description">
                <p>مشاوره و برنامه ریزی فردی و درسی</p>
                <p>پشتیبان آموزش</p>
                <p>سامانه شخصی برنامه ریزی</p>
            </div>
        </div>

        <div className="service-item">
        <div className="icon-container third-icon">
                <FaRegClipboard/>
            </div>
            <h2 className="service-title">خدمات آموزشی متفاوت</h2>
            <div className="service-description">
                <p>برگزاری کارگاه های رفع اشکال و جمع بندی</p>
                <p>برگزاری پانسیون های مطالعاتی</p>
                <p>برگزاری آزمون های آزمایشی کشوری</p>
            </div>
        </div>

        <div className="service-item">
        <div className="icon-container fourth-icon">
                <BiFootball />
            </div>
            <h2 className="service-title">ورزش و نشاط</h2>
            <div className="service-description">
                <p>برگزاری مسابقات ورزشی جام رویان</p>
                <p>بازدید علمی و فرهنگی و بازدید از کارخانجات صنعتی</p>
                <p>برگزاری اردوهای دانش آموزی</p>
            </div>
        </div>

        </div>

    </div>
  )
}

export default Services