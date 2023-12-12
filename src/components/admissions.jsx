import React, { Component } from 'react';
import './admission_style.css';
import Nav from './nav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Admissions extends Component {
    state = {
        msg : '',
    } 

    handleChange = (evt) => {
        this.setState({[evt.target.name] : evt.target.value});
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        if (!this.state.name || !this.state.email || !this.state.x_gpa || !this.state.xii_gpa || !this.state.rank) {
            if (!this.state.name){
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

            if (!this.state.email){
                toast.error('Enter Email!', {
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

            if (!this.state.x_gpa){
                toast.error('Enter Xth_GPA!', {
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

            if (!this.state.xii_gpa){
                toast.error('Enter XIIth_GPA!', {
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

            if (!this.state.rank){
                toast.error('Enter JEE Rank!', {
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
            toast.success('Application Received', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            this.props.onAdmissionSub(this.state.name, this.state.email, this.state.x_gpa, this.state.xii_gpa, this.state.rank);
        }
    }

    handleChange2 = (evt) => {
        this.setState({[evt.target.name] : evt.target.value});
    }

    handleCheck = (evt) => {
        if (!localStorage.getItem(this.state.check_email)){
            this.setState({msg : 'Enter Registered Email ID'});
        }
        else {
        const stu = JSON.parse(localStorage.getItem(this.state.check_email));
        if (stu.pending === 1){
            this.setState({msg : 'Your Application is Being Reviewed'});
        }
        else {
            if (stu.accepted === 1){
                this.setState({msg : 'Congratulations! You Have Been Accepted'});
            }
            else{
                this.setState({msg : 'Unfortunately! You Have Been Rejected'});
            }
        }
        }
        evt.preventDefault();
    }

    render() { 
        return (
            <div>
                <Nav />
            <div className="container">
            <h1 id="title-text">Undergraduate Admissions</h1>
        
            <form action="#" id="admission-form">
            <div className="admission-wrapper">
            <div className="personal">
                <h1 id="personal-title">Personal Details</h1>
                <label id="adm-name">Name <sup>*</sup>:</label>
                <input type="text" id="full_name" name='name' placeholder="Enter Your Full Name" onChange={this.handleChange} required />
                <label id="adm-father-name">Father's Name :</label>
                <input type="text" id="father_name" placeholder="Enter Father's Name" required />
                <label id="adm-dob">Date Of Birth :</label>
                <input type="date" id="dob" required />
                <label id="adm-email">Email <sup>*</sup>:</label>
                <input type="email" id="email"  name='email' placeholder="Enter Your Email" onChange={this.handleChange} required />
                <label id="adm-phone">Phone :</label>
                <input type="number" id="phone" placeholder="Enter Your Phone Number" required />
                <label id="adm-gender">Gender:</label>
                <select id="gender">
                    <option id="male">Male</option>
                    <option id="female">Female</option>
                    <option id="others">Others</option>
                    <option id="not-saying">Prefer Not To Say</option>
                </select>
                <label id="adm-nationality">Nationality :</label>
                <input type="text" id="nationality" placeholder="Enter Your Nationality" required />
            </div>
            <div className="academic">
                <h1 id="academic-title">Academic Qualifications</h1>
                <label id="adm-x">School :</label>
                <input type="text" id="school" placeholder="Enter Your School's Name" required />
                <label id="adm-x-gpa">Xth CGPA <sup>*</sup>:</label>
                <input type="number" id="x-gpa" name='x_gpa' placeholder="Enter Your Xth CGPA" step="any" onChange={this.handleChange} required />
                <label id="adm-xii">XII School :</label>
                <input type="text" id="xii-school" placeholder="Enter Your XIIth School's Name" required />
                <label id="adm-xii-gpa">XII CGPA<sup>*</sup>:</label>
                <input type="number" id="xii-gpa" name='xii_gpa' placeholder="Enter Your XIIth CGPA" step="any" onChange={this.handleChange} required />
                <label id="adm-rank">JEE Rank<sup>*</sup>:</label>
                <input type="number" id="rank" name='rank' placeholder="Enter Your JEE rank" onChange={this.handleChange} required />
                <label id="adm-f-prefer">Stream(1st):</label>
                <input type="text" id="f-prefer" placeholder="Enter Your First Preference - Ex: CSE, ECE" required />
                <label id="adm-s-prefer">Stream(2nd):</label>
                <input type="text" id="s-prefer" placeholder="Enter Your Second Preference - Ex: CSE, ECE" required />
            </div>
            </div>
            <button id='adm-sub1' onClick={this.handleSubmit}>Apply</button>
            <ToastContainer />
            </form>
        </div>

        <div className='status-check'>
            <h1 id='status-announcement'>Admission Status</h1>
            <form>
                <input type='email' id='em1' name='check_email' placeholder='Enter Your Email To Check Admission Status' onChange={this.handleChange2}/>
                <button id='check-btn' onClick={this.handleCheck}>Check</button>
            </form>
            <h4 id='msg'>{this.state.msg}</h4>
        </div>
        
        </div>
        );
    }
}

export default Admissions;