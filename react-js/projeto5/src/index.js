import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/styles/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/home'
import { About } from './components/about'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
