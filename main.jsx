import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './component/Home/Home.jsx'
import About from '../src/component/About/About.jsx'
// import Contact from '../src/component/'
import User from '../src/component/User/User.jsx'
// import Github, { githubInfoLoader } from '../'
import Layout from '../src/Layout.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/Home' element={<Home />} />
       <Route path='/about' element={<About />} />
       {/* <Route path='/contact' element={<Contact />} /> */}
       <Route path='user/:userid' element={<User />} />
       {/* <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       /> */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)