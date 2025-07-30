import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Nav from './components/Nav';
import { Outlet } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}

export default App
