import { Link } from "react-router-dom";
import Nav from "./nav";
import './main_login_style.css';

const MainLogin = () => {

    return(
        <div>
            <Nav />
            <div className="ml-main">
                <div id="ml-stu-login">
                    <Link to='/login'>
                        <img src={require('./ml_stu.png')} alt='Student Login'/>
                        <h2 id="ml-stu-line">Login as a Student</h2>
                    </Link>
                </div>
                <div id="ml-fac-login">
                    <Link to='/adminlogin'>
                        <img src={require('./ml_fac.png')} alt='Faculty login'/>
                        <h2 id="ml-fac-line">Login as an Admin</h2>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MainLogin;