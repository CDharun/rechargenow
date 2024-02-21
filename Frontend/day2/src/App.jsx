import Login from './Components/Login'
import SignUp from './Components/SignUp'
import './App.css'
import Nav from './Components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='/Nav' element={<Nav />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
