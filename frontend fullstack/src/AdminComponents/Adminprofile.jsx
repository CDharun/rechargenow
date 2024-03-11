import { useState } from 'react';
import '../assets/Css/edit.css';

const Adminprofile = () => {
  // User state with initial data
  const [user, setUser] = useState({
    name: 'John ',
    email: 'johnr@email.com',
    phoneNumber: '9344701056',
  });

  // State to track edited user data
  const [editedUser, setEditedUser] = useState({ ...user });

  // State to track whether user is currently editing
  const [isUserEditing, setIsUserEditing] = useState(false);

  const handleUserEdit = () => {
    setIsUserEditing(true);
  };

  const handleUserSave = () => {
    // Save edited user data
    setUser({ ...editedUser });

    // Perform any necessary actions, e.g., update user data on server, show success message, etc.

    setIsUserEditing(false);
  };

  const handleUserCancel = () => {
    // Reset edited user data
    setEditedUser({ ...user });
    setIsUserEditing(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1 className="profile-title">{user.name}&apos;s Profile</h1>
      </div>
      <section className="user-details">
        <h2>Admin Details</h2>
        {isUserEditing ? (
          <>
            <label>Name: </label>
            <input
              className="input-field"
              type="text"
              value={editedUser.name}
              onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
            />
            <br />
            <label>Email: </label>
            <input
              className="input-field"
              type="email"
              value={editedUser.email}
              onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
            />
            <br />
            <label>Phone Number: </label>
            <input
              className="input-field"
              type="tel"
              value={editedUser.phoneNumber}
              onChange={(e) => setEditedUser({ ...editedUser, phoneNumber: e.target.value })}
            />
            <br />
            <button className="btn-save" onClick={handleUserSave}>Save</button>
            <button className="btn-cancel" onClick={handleUserCancel}>Cancel</button>
          </>
        ) : (
          <>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone Number: {user.phoneNumber}</p>
            <button className="btn-edit" onClick={handleUserEdit}>Edit</button>
          </>
        )}
      </section>
    </div>
  );
};

export default Adminprofile;
