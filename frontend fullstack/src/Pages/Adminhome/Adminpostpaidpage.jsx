import Adminnav from '../../AdminComponents/Adminnav'
import Adminfooter from '../../AdminComponents/Adminfooter'
import Adminside from '../../AdminComponents/Adminside'
// import Adminprepaid from '../../AdminComponents/Adminprepaid'
import Adminpostpaid from '../../AdminComponents/Adminpostpaid'
const AdminpostpaidPage = () => {
    return (
        <div>
            <Adminnav/>
            <br></br>
            <Adminside/>
            <Adminpostpaid/>
            <br></br>
            <br></br>
            <Adminfooter/>
        </div>
    );
}

export default AdminpostpaidPage;
