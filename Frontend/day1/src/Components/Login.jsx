import '..//assets/Css/login.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
function Login() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Logging in with:', phoneNumber, password);
  };

  return (
    <>
      <div className="hero">
        <div className="form-box">
          <h1>Login</h1>
          <form  id="mobile" className="input-group">
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
            <button type="button" className="submit-btn" onClick={handleLogin}>
              Login
            </button>
          </form>
          <div className="signup">
            <Link to = "/signup">
              Dont have an account? Signup Here
            </Link>
            {/* </a> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
