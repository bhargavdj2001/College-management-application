import React, { Component } from 'react';
import './admin_signup_style.css';
import {Link} from 'react-router-dom';
import Nav from './nav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class AdminSignup extends Component {
    state = { 
    } 

    handleChange = (evt) => {
        this.setState({[evt.target.name] : evt.target.value});
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        if (!(this.state.name) || (!this.state.rno || this.state.rno.length!==10) || (!this.state.admno || this.state.admno.length!==4) || !(this.state.email) || (!this.state.phone || this.state.phone.length!==10) || (!this.state.password || this.state.password.length<7)){
            if (!this.state.name) {
                toast.error('Enter Name!', {
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

            if (!this.state.rno || this.state.rno.length!==10) {
                toast.error('Enter Valid Roll Number! eg -(19BD1X05XX)', {
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

            if (!this.state.admno || this.state.admno.length!==4) {
                toast.error('Enter Valid Admission Number! (4 digits)', {
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

            if (!this.state.email) {
                toast.error('Enter Valid Email!', {
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

            if (!this.state.phone || this.state.phone.length!==10) {
                toast.error('Enter Valid Phone Number!', {
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

            if (!this.state.password || this.state.password.length<7) {
                toast.error('Enter Password Longer Than 6 characters!', {
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
            
            return false;
        }
        else {
            this.props.uponAdminSubmit(this.state.name, this.state.rno, this.state.admno, this.state.email, this.state.phone, this.state.password);
        }
    }

    render() { 
        return (
            <div>
            <Nav />
            <div className='ad1-signup-wrap'>
                <div className='ad1-signup-left'>
                    <img src = {require('./signup_1.png')} alt = 'Signup Illustration '/>
                    <h3 id='ad1-img-subtext'>Just One Click Away From Managing All Your College Work At One Single Place</h3>
                </div>
                <div className='ad1-signup-right'>
                <h4 id='ad1-signup-hello-text'>Hello Admin!</h4>
                <h5 id='ad1-signup-hello-subtext'>Sign up to get exclusive access to college material</h5>
                <form className='ad1-signup-form'>
                    <label>
                        <h3 id='ad1-l-name'>Name </h3>
                        <input type='text' id='ad1-sign-name' name='name' onChange = {this.handleChange}/>
                    </label>
                    <label>
                        <h3 id='ad1-l-rno'>Admin ID </h3>
                        <input type='text' name='rno' id='ad1-sign-rno' onChange = {this.handleChange}/>
                    </label>
                    <label>
                        <h3 id='ad1-l-admno'>Admission Number </h3>
                        <input type='number' name='admno' id='ad1-sign-admno' onChange = {this.handleChange}/>
                    </label>
                    <label>
                        <h3 id='ad1-l-email'>Email </h3>
                        <input type='email' name='email' id='ad1-sign-email' onChange = {this.handleChange}/>
                    </label>
                    <label>
                        <h3 id='ad1-l-phone'>Phone </h3>
                        <input type='text' name='phone' id='ad1-sign-phone' onChange = {this.handleChange}/>
                    </label>
                    <label>
                        <h3 id='ad1-l-password'>Password </h3>
                        <input type='password' name='password' id='ad1-sign-password' onChange = {this.handleChange}/>
                    </label>
                    
                    <button id='ad1-signup-sub' onClick={this.handleSubmit}>Signup</button>
                    <ToastContainer />
                </form>
                <h4 id='ad1-login-text'>Already Have An Account? <Link to='/adminlogin'>Login</Link></h4>
                </div>
            </div>
            </div>
        );
    }
}

export default AdminSignup;