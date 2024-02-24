import Adminnav from '../../AdminComponents/Adminnav'
import Adminfooter from '../../AdminComponents/Adminfooter'
import Adminside from '../../AdminComponents/Adminside'
import Adminprepaid from '../../AdminComponents/Adminprepaid'
const Adminhome = () => {
    return (
        <div>
            <Adminnav/>
            <br></br>
            <Adminside/>
            <Adminprepaid/>
            <br></br>
            <br></br>
            <Adminfooter/>
        </div>
    );
}

export default Adminhome;
