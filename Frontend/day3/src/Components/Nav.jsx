import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { useState } from 'react'; // Import useState hook
import '../assets/Css/nav.css';
import Sidebar from "./Sidebar";

const Listele = (props) => {
  if (props.loc === "/" + props.name.toLowerCase().replace(" ", "")) {
    return (
      <li className='sele'><Link to={"/" + props.name.toLowerCase().replace(" ", "")}>{props.name}</Link></li>
    );
  } else {
    return (
      <li className='ele'><Link to={"/" + props.name.toLowerCase().replace(" ", "")}>{props.name}</Link></li>
    );
  }
}

Listele.propTypes = {
  loc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

function Nav(props) {
  const list = ["Recharge", "Plans", "Services", "FAQ", "Contact"]; // Update the list of navbar items for recharge portal
  const listele = list.map((ele, index) => <Listele key={index} loc={props.loc} name={ele} />);
  
  // State for dropdown menu
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div>
      <div className='gg'>  
        <ul>
          {listele}
        
        <div className="profile-section">
          <div className="profile-dropdown">
            <img className="profile-img" src="https://res.cloudinary.com/dloadmcdu/image/upload/v1708509872/recharge/icon_nv74sn.png" alt="Profile" onClick={() => setShowDropdown(!showDropdown)} />
            {showDropdown && (
              <div className="dropdown-content">
                <Link to='/edit'>Profile
                </Link>
               
                <Link to='/'>
                  Logout
                </Link> 
              </div>
            )}
          </div>
          {/* <span className="profile-name">Your Name</span> */}
        </div>
        </ul>
        <Sidebar />
        <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1708412561/recharge/phone_gif_othmbz.gif" alt="Phone Gif" />
      </div>
    </div>
  );
}

Nav.propTypes = {
  loc: PropTypes.string.isRequired
}

export default Nav;
