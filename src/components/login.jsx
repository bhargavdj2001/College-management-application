import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import Nav from './nav';
import './signup_signin_style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const after_login = useNavigate();
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

    const handleLogin = (evt) => {
        evt.preventDefault();
        if (localStorage.getItem(Id)) {
            const stu = JSON.parse(localStorage.getItem(Id));
            if (Id === stu.s_rno && Password === stu.s_password){
                localStorage.setItem('rno_logged_in', Id);
                after_login('/profile');
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
            <div className='login-wrap'>
                <div className='login-left'>
                    <img src = {require('./login_1.png')} alt = 'Login Illustration '/>
                    <h3 id='login-img-subtext'>Just One Click Away From Managing All Your College Work At One Single Place</h3>
                </div>
                <div className='login-right'>
                <h4 id='login-hello-text'>Hello Student!</h4>
                <h5 id='login-hello-subtext'>Log In to get exclusive access to college material</h5>
                <form className='signup-form'>
                    <label>
                        <h3 id='l-rno-login'>Roll Number </h3> <h5  id='login-rno-error'>{}</h5>
                        <input id='rno-ip' type='text' name='rno' onChange = {handleChange}/>
                    </label>
                    <label>
                        <h3 id='l-password-login'>Password </h3><h5  id='login-pwd-error'>{}</h5>
                        <input id='pwd-ip' type='password' name='password' onChange = {handleChange}/>
                    </label>
                    
                    <button id='login-sub' onClick={handleLogin}>Login</button>
                    <ToastContainer
                    />
                </form>
                <h4 id='login-text-bottom'>Do Not Have An Account? <Link to='/signup'>Sign Up</Link></h4>
                </div>
            </div>
            
            </div>
        );

}

export default Login;