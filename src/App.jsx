import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ProjectPage from './Pages/ProjectPage'
import Others from './Pages/Others'
import WebPage from './Page/WebPage'



export default function App() {

  return (
    

      <Routes>
        <Route path="/" element={<WebPage/>} />

      </Routes>
        
     
    
  )
}

