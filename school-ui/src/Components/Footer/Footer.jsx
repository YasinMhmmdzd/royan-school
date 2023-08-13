import React from 'react'
import "./Footer.css"
import {CiLocationOn} from 'react-icons/ci'
import {AiFillPhone} from 'react-icons/ai'
import {BiLogoTelegram , BiLogoInstagramAlt , BiLogoGmail} from 'react-icons/bi'
function Footer() {
  return (
    <footer>
        <div className="top-footer">
        <div className="right-footer">
            <h2 className="right-footer-title">
                آینده از اینجا آغاز می شود
            </h2>
            <p> <CiLocationOn />نشانی :‌ وکیل آباد, جلال آل احمد ۲ , پلاک ۶۴</p>
            <p><AiFillPhone /> تلفن : 05136059333 , 09154433630</p>
        </div>
        <div className="left-footer">
            <img src="./images/logo.webp" alt="" />
        </div>
        </div>
        <div className="social-media">
          <a href="#"><BiLogoTelegram /></a>
          <a href="#"><BiLogoInstagramAlt /></a>
          <a href="#"><BiLogoGmail /></a>
        </div>
        <div className='copyright'>
          <p>طراحی شده توسط تیم طراحی سایت رویان</p>
        </div>
    </footer>
  )
}

export default Footer