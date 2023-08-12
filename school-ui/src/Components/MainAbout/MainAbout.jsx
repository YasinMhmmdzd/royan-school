import React from 'react'
import "./MainAbout.css"
import ScrollAnimation from 'react-animate-on-scroll'
function MainAbout() {
  return (
      <div className="main-about">
        <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut' className='main-about-container'>
        <div className="main-about-text">
            <h2>درباره دبیرستان زندگی رویان</h2>
            <p>دبیرستان پسرانه رویان دوره دوم از سال ۱۴۰۱ با هدف ساخت آینده ای بهتر و با اتکا 
                به سیاست های مدون در اسناد بالا دستی 
                به ویژه سند تحول بنیادین زمینه دستیابی دانش آموزان به مراتبی از حیات 
                طیبه را که شامل رشد همه جانبه و متوازن آنان در طراز شهروندی متعادل و 
                متعالی است فراهم می آورد.
            </p>
        </div>
        <div className="main-about-image">
            <img src="./images/middle-about-image.webp" alt="middl-about-image" />
        </div>
    </ScrollAnimation>
    </div>
  )
}

export default MainAbout