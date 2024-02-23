import  { useState } from 'react';
import '../assets/Css/edit.css'
function Edit() {
  // State variables to store user information
  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to update user information
    // For now, let's just log the user data
    console.log(' Name:', Name);
    console.log('Email:', email);
    console.log('Current Password:', currentPassword);
    console.log('New Password:', newPassword);
  };

  return (
    <div className='over'>
        <br/>
    <div className="profile-editing-page">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" id="firstName" value={Name} onChange={(e) => setName(e.target.value)} placeholder="Name"/>
          
        </div>
        <div className="form-group">
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}placeholder="Email" />
        </div>

        <div className="form-group">
          <input type="password" id="currentPassword" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)}placeholder="Current Password" />
        </div>

        <div className="form-group">
          <input type="password" id="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}  placeholder="New Password"/>
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
    </div>
  );
}

export default Edit;
