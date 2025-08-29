import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Project from './pages/Projects'
import Agent from './pages/Agents'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/agents" element={<Agent />} />
      </Routes>
    </div>
  )
}

export default App