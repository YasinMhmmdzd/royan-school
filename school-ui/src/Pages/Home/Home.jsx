import React from 'react'
import "./Home.css"
import Header from '../../Components/Header/Header'
import MainAbout from '../../Components/MainAbout/MainAbout'
import Services from '../../Components/Services/Services'
import MiddleBox from '../../Components/MiddleBox/MiddleBox'
import PersonalsList from '../../Components/PersonalsList/PersonalsList'
import Footer from '../../Components/Footer/Footer'

function Home() {
  return (
    <div className="home-page">
      <Header />
      <main>
        <MainAbout />
        <Services />
        <MiddleBox />
        {/* <PersonalsList /> */}
      </main>
        <Footer />
    </div>
  )
}

export default Home