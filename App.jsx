import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Header from '../src/component/Header/Header.jsx'
// import Footer from './components/Footer/Footer'
import Home from '../src/component/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Home/>
   
  )
}

export default App