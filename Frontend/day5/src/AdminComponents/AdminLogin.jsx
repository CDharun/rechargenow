import '../AdminCss/adminlogin.css';
import { useState } from 'react';
import { Link } from "react-router-dom";

function Login() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault(); 
    if (phoneNumber.trim() === '' || password.trim() === '') {
      alert('Please enter your phone number and password');
      return;
    }
  };
  return (
    <div className='whole'>
      <br/>
    <div className="form-box">
      <h1>Admin Login</h1>
      <form id="mobile" className="input-group" onSubmit={handleLogin}>
        <input
          type="text"
          className="input-field"
          id="phone-number"
          placeholder="Phone Number"
          required
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          type="password"
          className="input-field"
          id="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to="/admin/home">
        <button type="submit" className="submit-btn">
          Login
        </button></Link>
      </form>
     
      </div>
    </div>
    
  );
}

export default Login;
