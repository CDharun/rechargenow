import  { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../AdminCss/adminnav.css';


const Listele = (props) => {
  if (props.loc === '/' + props.name.toLowerCase().replace(' ', '')) {
    return (
      <li className='sele'>
        <Link to={'/' + props.name.toLowerCase().replace(' ', '')}>{props.name}</Link>
      </li>
    );
  } else {
    return (
      <li className='ele'>
        <Link to={'/' + props.name.toLowerCase().replace(' ', '')}>{props.name}</Link>
      </li>
    );
  }
};

Listele.propTypes = {
  loc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

function Nav(props) {
  const list = [  ]; // Removed the "Dashboard" link from here
  const listele = list.map((ele, index) => <Listele key={index} loc={props.loc} name={ele} />);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className='gg'>
      <ul>
        {listele}
        <li className='ele'>
          <Link to='/'>Addons</Link> {/* Added the "Dashboard" link here */}
        </li>
        <li className='ele'>
          <Link to='/'>prepaid</Link> {/* Added the "Dashboard" link here */}
        </li>
        <li className='ele'>
          <Link to='/'>postpaid</Link> {/* Added the "Dashboard" link here */}
        </li>
        <div className='profile-section'>
          <div className='profile-dropdown'>
            <img
              className='profile-img'
              src='https://res.cloudinary.com/dloadmcdu/image/upload/v1708509872/recharge/icon_nv74sn.png'
              alt='Profile'
              onClick={() => setShowDropdown(!showDropdown)}
            />
            {showDropdown && (
              <div className='dropdown-content'>
                <Link to='/Admin'>Profile</Link>
                <Link to='/Admin'>Logout</Link>
              </div>
            )}
          </div>
        </div>
      </ul>
    
    </div>
  );
}

Nav.propTypes = {
  loc: PropTypes.string.isRequired,
};

export default Nav;
