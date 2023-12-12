import React, { Component } from 'react';
import './signup_signin_style.css';
import {Link} from 'react-router-dom';
import Nav from './nav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Signup extends Component {
    state = { 
    } 

    handleChange = (evt) => {
        this.setState({[evt.target.name] : evt.target.value});
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        if (!(this.state.name) || (!this.state.rno || this.state.rno.length !==10) || (!this.state.admno || this.state.admno.length!==4) || !(this.state.email) || (!this.state.phone || this.state.phone.length!==10) || (!this.state.password || this.state.password.length<7)){
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
                toast.error('Enter Valid Roll Number! eg -(19BDXA05XX)', {
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
                toast.error('Enter Valid Admission Number (4 digits)!', {
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
                toast.error('Enter Password longer than 6 characters!', {
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
            this.props.uponSubmit(this.state.name, this.state.rno, this.state.admno, this.state.email, this.state.phone, this.state.password);
        }
    }

    render() { 
        return (
            <div>
            <Nav />
            <div className='signup-wrap'>
                <div className='signup-left'>
                    <img src = {require('./signup_1.png')} alt = 'Signup Illustration '/>
                    <h3 id='img-subtext'>Just One Click Away From Managing All Your College Work At One Single Place</h3>
                </div>
                <div className='signup-right'>
                <h4 id='signup-hello-text'>Hello Student!</h4>
                <h5 id='signup-hello-subtext'>Sign up to get exclusive access to college material</h5>
                <form className='signup-form'>
                    <label>
                        <h3 id='l-name'>Name </h3>
                        <input type='text' id='sign-name' name='name' onChange = {this.handleChange} required/>
                    </label>
                    <label>
                        <h3 id='l-rno'>Roll Number </h3>
                        <input type='text' name='rno' id='sign-rno' onChange = {this.handleChange} required/>
                    </label>
                    <label>
                        <h3 id='l-admno'>Admission Number </h3>
                        <input type='number' name='admno' id='sign-admno' onChange = {this.handleChange} required/>
                    </label>
                    <label>
                        <h3 id='l-email'>Email </h3>
                        <input type='email' name='email' id='sign-email' onChange = {this.handleChange} required/>
                    </label>
                    <label>
                        <h3 id='l-phone'>Phone </h3>
                        <input type='text' name='phone' id='sign-phone' onChange = {this.handleChange} required/>
                    </label>
                    <label>
                        <h3 id='l-password'>Password </h3>
                        <input type='password' name='password' id='sign-password' onChange = {this.handleChange} required/>
                    </label>
                    
                    <button id='signup-sub' onClick={this.handleSubmit}>Signup</button>
                    <ToastContainer />
                </form>
                <h4 id='login-text'>Already Have An Account? <Link to='/login'>Login</Link></h4>
                </div>
            </div>
            </div>
        );
    }
}

export default Signup;