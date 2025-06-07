import React from 'react'
import './index.css'
import HomepageLaboran from './pages/laboran/HomepageLaboran'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/homepagelaboran' element={<HomepageLaboran />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
