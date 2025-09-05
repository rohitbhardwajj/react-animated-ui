import React from 'react'
import { Link } from 'react-router-dom'  

const HomeBottomText = () => {
  return (
    <div className='home-bottom-text'>
      <div className="s">
        <Link to="/projects">Projects</Link>
      <Link to="/agents">Agency</Link>
      </div>
      
    </div>
  )
}

export default HomeBottomText
