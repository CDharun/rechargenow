import Login from './Components/Login'
import SignUp from './Components/SignUp'
import UserHomePage from './Pages/user/userHomePage'
import './App.css'
import Nav from './Components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Offerss from './Pages/off/Offerss'
import Us from './Pages/About/Us'
import Dash from './Pages/dasf/Dash'
import Plan from './Pages/plan/Plan'
import RechargeView from './Pages/recharges/RechargeView'
import Services from './Pages/Services/Services'
import AdminLogin from './AdminComponents/AdminLogin'
import Adminhome from './Pages/Adminhome/Adminhome'
import Edits from './Pages/Profile/Edits'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='/Nav' element={<Nav />}></Route>
      <Route path='/usr/home' element={<UserHomePage />}></Route>
      <Route path='/edit' element={<Edits />}></Route>
      <Route path='/dh' element={<Dash/>}></Route>
      <Route path='/about' element={<Us />}></Route>
      <Route path='/off' element={<Offerss />}></Route>
      <Route path='/plan' element={<Plan />}></Route>
      <Route path='/plan/view/:id' element={<RechargeView/>} />
      <Route path='/ser' element={<Services/>}></Route>
 



      <Route path='/Admin' element={<AdminLogin/>}></Route>
      <Route path='/admin/home' element={<Adminhome/>}></Route>
 
    </Routes>
    </BrowserRouter>
  )
}

export default App
