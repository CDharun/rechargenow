import  { useState } from 'react';
import axios from 'axios';
import '../assets/Css/signup.css'
import { useNavigate } from "react-router-dom";

function FrontendAndBackend() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [serviceProvider, setServiceProvider] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [role, setRole] = useState('user'); // Default role is 'user'

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      fname: fullName,
      lname: lastName,
      phone: phoneNumber,
      password: password,
      confirmPassword: confirmPassword,
      email: email,
      serviceProvider: serviceProvider,
      address: address,
      city: city,
      role: role
    };

    // Send data to backend using Axios
    axios.post('http://localhost:8080/auth/register', userData)
      .then(response => {
        console.log('Response from backend:', response.data);
        navigate("/");
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error
      });
  };

  return (
    <div className='hand'>
      <br />
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="fullName"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="phoneNumber"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="serviceProvider"
              placeholder="Service Provider"
              value={serviceProvider}
              onChange={(e) => setServiceProvider(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="address"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="city"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role:</label>
            <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default FrontendAndBackend;
