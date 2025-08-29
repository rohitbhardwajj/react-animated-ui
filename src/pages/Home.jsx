import React from 'react'
import Video from '../components/home/Video'
import HomeTopText from '../components/home/Home-top-text'
import HomeBottomText from '../components/home/Home-bottom-text'
import Nav from '../components/home/Nav'

const Home = () => {
  return (
    <div>
        <Nav></Nav>
      <div className='home-page'>
          <Video></Video>
      </div>
       <div className='home-page-content'>
        <HomeTopText></HomeTopText>
        <HomeBottomText></HomeBottomText>
       </div>
    </div>
  )
}

export default Home