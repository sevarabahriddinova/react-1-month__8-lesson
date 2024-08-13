import { useState } from 'react'
import './App.css'
import RouteController from './routes/index'
import Nav from './components/Nav'
import { useLocation } from 'react-router-dom'
import Footer  from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)
  const pathName = useLocation()



  return (
    <>
       <Nav/>
       <RouteController/>
       <Footer/>
       
    </>
  )
}

export default App
