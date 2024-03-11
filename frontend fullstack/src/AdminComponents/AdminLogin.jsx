import '../assets/Css/login.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'; 
import {useNavigate} from "react-router-dom";


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); 
    try {

      const response = await axios.post('http://localhost:8080/auth/login', {
        email: email,
        password: password
      });
    
      console.log('Login successful:', response.data);
      navigate("/admin/home");
    } catch (error) {
      // Handle error
      console.error('Login error:', error);
      // Display error message to the user
    }
  };

  return (
    <div className='whole'>
      <br/>
      <div className="form-box">
        <h1>Login</h1>
        <div className='ad'>
          <Link to='Admin/'><button type ="button">Admin</button></Link> 
        </div>
        <form id="mobile" className="input-group" onSubmit={handleLogin}>
         
          <input
            type="text"
            className="input-field"
            id="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          {/* Remove Link wrapper from the button */}
          <button type="submit" onClick={handleLogin} className="submit-btn">
            Login
          </button>
        </form>
        {/* <div className="signup">
        
            Dont have an account? Signup Here
          
        </div> */}
      </div>
    </div>
  );
}

export default Login;
