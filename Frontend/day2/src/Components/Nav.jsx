
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
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
  
  return (
    <div>
      <div className='gg'>  
        <ul>
          {listele}
        </ul>
        <Sidebar />
      </div>
      
    </div>
  );
}

Nav.propTypes = {
  loc: PropTypes.string.isRequired
}

export default Nav;
