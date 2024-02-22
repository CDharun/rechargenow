import Login from './Components/Login'
import SignUp from './Components/SignUp'
import UserHomePage from './Pages/user/userHomePage'
import Edit from './Components/Edit'
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
      <Route path='/usr/home' element={<UserHomePage />}></Route>
      <Route path='/edit' element={<Edit />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
