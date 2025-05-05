import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import got from '../../assets/got.jpg'
import gotTitle from '../../assets/gotTitle.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'



const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <div className='got'>
          <img src={got} alt='got' className='gotImage' />
          <div className='gotTitle'>
          <img src={gotTitle} alt='gotTitle' className='gotTitleImage' />
          <p>Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.</p>
          <div className="got_btns">
            <button className='btn'><img src={play_icon} alt='play_icon' />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt='info_icon' />More Info</button>
          </div>
          <TitleCards />
        </div>
        </div>
        <div className="more-cards">
          <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
          <TitleCards title={"Only on Netflix"} category={"popular"}/>
          <TitleCards title={"Upcoming"} category={"upcoming"}/>
          <TitleCards title={"Top Picks for You"} category={"now_playing"}/>
        </div > 
        <Footer />
    </div>
  )
}

export default Home