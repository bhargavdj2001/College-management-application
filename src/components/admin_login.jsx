import { useState} from "react";
import Nav from "./nav";
import './admin_login_style.css';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminLogin = () => {
    const acceptance = useNavigate();
    const [Id, setId] = useState('');
    const [Password, setPassword] = useState('');

    const handleChange = (evt) => {
        if (evt.target.name === 'rno') {
            setId(evt.target.value);
        }
        else {
            setPassword(evt.target.value);
        }
    }

    const handleAdminLogin = (evt) => {
        evt.preventDefault();
        if (localStorage.getItem(Id) !== null) {
            const admin = JSON.parse(localStorage.getItem(Id));
            if (Id === admin.a_rno && Password === admin.a_password){
                localStorage.setItem('admin_logged_in', Id);
                acceptance('/acceptance');
            }
            else {
                toast.error('Invalid Password!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }
        }
        else {
            toast.error('Invalid ID!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
    }

    return (
        <div>
            <Nav />
        <div className='ad-login-wrap'>
            <div className='ad-login-left'>
                <img src = {require('./login_1.png')} alt = 'Login Illustration '/>
                <h3 id='ad-login-img-subtext'>Just One Click Away From Managing All Your College Work At One Single Place</h3>
            </div>
            <div className='ad-login-right'>
            <h4 id='ad-login-hello-text'>Hello Admin!</h4>
            <h5 id='ad-login-hello-subtext'>Log In to get exclusive admin features available </h5>
            <form className='ad-signup-form'>
                <label>
                    <h3 id='ad-l-rno-login'>Admin ID </h3> <h5  id='ad-login-rno-error'>{}</h5>
                    <input id='ad-rno-ip' type='text' name='rno' onChange = {handleChange}/>
                </label>
                <label>
                    <h3 id='ad-l-password-login'>Password </h3><h5  id='ad-login-pwd-error'>{}</h5>
                    <input id='ad-pwd-ip' type='password' name='password' onChange = {handleChange}/>
                </label>
                
                <button id='ad-login-sub' onClick={handleAdminLogin}>Login</button>
                <ToastContainer />
            </form>
            <h4 id='ad-login-text-bottom'>Do Not Have An Account? <Link to='/adminsignup'>Sign Up</Link></h4>
            </div>
        </div>
        </div>
    );
}

export default AdminLogin;