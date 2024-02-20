import Login from './Components/Login'
import SignUp from './Components/SignUp'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
