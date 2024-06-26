import React, { useEffect } from 'react'
import "./Home.css"
import Header from '../../Components/Header/Header'
import MainAbout from '../../Components/MainAbout/MainAbout'
import Services from '../../Components/Services/Services'
import MiddleBox from '../../Components/MiddleBox/MiddleBox'
import Footer from '../../Components/Footer/Footer'

function Home() {

  
  useEffect( ()=>{
    document.title ="صفحه اصلی |‌دبیرستان زندگی رویان"
  } )


  return (
    <div className="home-page">
      <Header />
      <main>
        <MainAbout />
        <Services />
        <MiddleBox />
      </main>
        <Footer />
    </div>
  )
}

export default Home