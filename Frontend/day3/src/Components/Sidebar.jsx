import { Link } from 'react-router-dom';
import '../assets/Css/sidebar.css';

const Sidebar = () => {
  const openSidebar = () => {
    document.getElementById("mySidebar").style.display = "block";
  };

  const closeSidebar = () => {
    document.getElementById("mySidebar").style.display = "none";
  };

  return (
    <>
      <div className="sidebar-header">
        <button className="sidebar-toggle-btn" onClick={openSidebar}>☰</button>
      </div>
      <div className="sidebar-menu" style={{ display: "none" }} id="mySidebar">
        <button onClick={closeSidebar} className="close-button">Close</button>
        <hr></hr>
        <Link to="" className="sidebar-link">Offers</Link>
        <Link to="" className="sidebar-link">Help</Link>
        <Link to="/" className="sidebar-link">Logout</Link>
      </div>
    </>
  );
}

export default Sidebar;