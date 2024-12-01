import { Admin } from './components/Admin'
import { User } from './components/User'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {


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
