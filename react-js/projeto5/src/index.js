import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/styles/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/home'
import { About } from './components/about'
import { Menu } from './components/menu'
import { Post } from './components/post'
import { Redirect } from './components/redirect'
import { NotFound } from './components/notFound'
import { PostIt } from './components/postIt'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/post/:id" element={<Post />} /> */}
        <Route path="/post" element={<Post />} />
        <Route path="/post" element={<Post />}>
          <Route path=":id" element={<PostIt />} />
        </Route>
        <Route path="/redirect" element={<Redirect />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
