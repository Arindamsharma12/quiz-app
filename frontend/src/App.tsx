import { useState } from 'react'
import { Admin } from './components/Admin'
import { User } from './components/User'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/user' element={<User/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
