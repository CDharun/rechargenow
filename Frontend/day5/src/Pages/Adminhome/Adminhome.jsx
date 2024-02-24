import Adminnav from '../../AdminComponents/Adminnav'
import Adminfooter from '../../AdminComponents/Adminfooter'
import Adminside from '../../AdminComponents/Adminside'
const Adminhome = () => {
    return (
        <div>
            <Adminnav/>
            <br></br>
            <Adminside/>
            <br></br>
            <br></br>
            <Adminfooter/>
        </div>
    );
}

export default Adminhome;
