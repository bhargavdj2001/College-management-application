import React, { Component } from 'react';
import Nav from './nav';
import './resume_style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ResumeBuilder extends Component {
    state = {  } 

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }

    handleBuilding = (e) => {
        e.preventDefault();
        if (!(this.state.name) || !(this.state.title) || !(this.state.school) || !(this.state.inter) || !(this.state.college) || !(this.state.email) || !(this.state.phone)){
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

            if (!this.state.title) {
                toast.error('Enter Title!', {
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

            if (!this.state.school) {
                toast.error('Enter School Name!', {
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

            if (!this.state.inter) {
                toast.error('Enter Intermediate College Name!', {
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

            if (!this.state.college) {
                toast.error('Enter College Name!', {
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

            if (!this.state.phone) {
                toast.error('Enter Phone Number!', {
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
        this.props.forResume(this.state.name, this.state.title,  this.state.work, this.state.school, this.state.inter, this.state.college, this.state.skills, this.state.certification, this.state.projects, this.state.email, this.state.phone);
        }
    }

    render() { 
        return (
            <div>
                <Nav />
                <div id='res-b-outer-wrap'>
                    <h1 id='res-b-main-heading'>Resume Builder</h1>
                    <form id='res-b-form'>
                        <label id='res-b-name-l'>Name:<sup className='res-sup'>*</sup> </label>
                        <input type='text' name='name' id='res-b-name-ip' onChange={this.handleChange} required/>
                        <label id='res-b-title-l'>Job Title:<sup className='res-sup'>*</sup> </label>
                        <input type='text' name='title' id='res-b-title-ip' onChange={this.handleChange} required/>
                        <label id='res-b-work-l'>Work Experience: </label>
                        <input type='text' name='work' id='res-b-work-ip' onChange={this.handleChange} required/>
                        <h3 id='res-b-edu'>Educational Qualifications:</h3>
                        <label id='res-b-school-l'>School:<sup className='res-sup'>*</sup> </label>
                        <input type='text' name='school' id='res-b-school-ip' onChange={this.handleChange} required/>
                        <label id='res-b-inter-l'>Intermediate:<sup className='res-sup'>*</sup> </label>
                        <input type='text' name='inter' id='res-b-inter-ip' onChange={this.handleChange} required/>
                        <label id='res-b-college-l'>College:<sup className='res-sup'>*</sup> </label>
                        <input type='text' name='college' id='res-b-college-ip' onChange={this.handleChange}/>
                        <h3 id='res-b-ski'>Skills and Certifications</h3>
                        <label id='res-b-skills-l'>Skills: </label>
                        <textarea name='skills' id='res-b-skills-ip' onChange={this.handleChange} required/>
                        <label id='res-b-certification-l'>Certification: </label>
                        <textarea name='certification' id='res-b-certification-ip' onChange={this.handleChange} required/>
                        <label id='res-b-projects-l'>Projects: </label>
                        <textarea name='projects' id='res-b-projects-ip' onChange={this.handleChange} required/>
                        <h3 id='res-b-contact'>Contact Information:</h3>
                        <label id='res-b-email-l'>Email:<sup>*</sup> </label>
                        <input type='email' name='email' id='res-b-email-ip' onChange={this.handleChange} required/>
                        <label id='res-b-phone-l'>Phone:<sup>*</sup> </label>
                        <input type='number' name='phone' id='res-b-phone-ip' onChange={this.handleChange} required/>
                        <button id='res-b-build-btn' onClick={this.handleBuilding}>Create My Resume</button>
                        <ToastContainer />
                    </form>
                </div>
            </div>
        );
    }
}

export default ResumeBuilder;