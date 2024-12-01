import { Admin } from './components/Admin'
import { User } from './components/User'
import './App.css'
import { HashRouter,Routes,Route } from 'react-router-dom'


function App() {


  return (
    <>
      <HashRouter>
        <Routes>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/user' element={<User/>}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
