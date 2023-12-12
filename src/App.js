import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './components/landing'
import NewBlogPage from './components/new_blogpage';
import Admissions from './components/admissions';
import Acceptance from './components/admission_acceptance';

import Login from './components/login';
import Signup from './components/signup';
import SProfile from './components/stu_profile';
import ResumeBuilder from './components/resume_builder';
import ResumeCover from './components/resume_cover';
import AdminLogin from './components/admin_login';
import MainLogin from './components/main_login';
import AdminSignup from './components/admin_signup';

import {withRouter} from './components/withRouter';



class App extends Component {
  state = {
    students : [],
    s_id : 1,

    admissions : [],
    adm_id : 1,

    admins : [],
    admin_id : 1,

  }

  handleSubmit = (_name, rno, admno, email, phone, password) => {
    const stu_list = this.state.students;
    const student = {
      s_id : this.state.s_id,
      s_name : _name,
      s_rno : rno,
      s_admno : admno,
      s_email : email,
      s_phone : phone, 
      s_password : password,
    };
    stu_list.push(student);
    this.setState({students : stu_list});
    this.setState({s_id : this.state.s_id+1});
    localStorage.setItem(rno, JSON.stringify(student));
    this.props.navigate('/login');
  }

  handleAdminSubmit = (_name, rno, admno, email, phone, password) => {
    const admin_list = this.state.admins;
    const admin = {
      a_id : this.state.admin_id,
      a_name : _name,
      a_rno : rno,
      a_admno : admno,
      a_email : email,
      a_phone : phone, 
      a_password : password,
    };
    admin_list.push(admin);
    this.setState({admins : admin_list});
    this.setState({admin_id : this.state.admin_id+1});
    localStorage.setItem(rno, JSON.stringify(admin));
    this.props.navigate('/adminlogin');
  }

  // handleLogin = (rno, password) => {
  //   if (localStorage.getItem(rno) !== null) {
  //     const stu = JSON.parse(localStorage.getItem(rno));
  //     if (rno === stu.s_rno && password === stu.s_password){
  //       localStorage.setItem('rno_logged_in', rno);
  //     }
  //   }
  // }

  // Admissions Handling Function
  handleAdmission = (name, email, x_gpa, xii_gpa, rank) => {
    
    if (localStorage.getItem('admission')){
    const adm_list = JSON.parse(localStorage.getItem('admission'));
    const new_adm = {
      id : this.state.adm_id,
      name : name,
      email : email,
      x_gpa : x_gpa,
      xii_gpa : xii_gpa,
      rank : rank,
      pending : 1,
      accepted : 0,
    }
    adm_list.push(new_adm);
    //this.setState({admissions : adm_list});
    this.setState({adm_id : this.state.adm_id+1});
    localStorage.setItem(email, JSON.stringify(new_adm));
    localStorage.setItem('admission', JSON.stringify(adm_list));
    console.log(adm_list);
    }
    else {
      const adm_list = [];
      const new_adm = {
        id : this.state.adm_id,
        name : name,
        email : email,
        x_gpa : x_gpa,
        xii_gpa : xii_gpa,
        rank : rank,
        pending : 1,
        accepted : 0,
      }
      adm_list.push(new_adm);
      //this.setState({admissions : adm_list});
      this.setState({adm_id : this.state.adm_id+1});
      localStorage.setItem(email, JSON.stringify(new_adm));
      localStorage.setItem('admission', JSON.stringify(adm_list));
    }
  }

  handleResume = (name, title, work, school, inter, college, skills, certification, projects, email, phone) => {
      const resume = {
        name : name,
        title : title,
        work : work,
        school : school,
        inter : inter,
        college : college,
        skills : skills,
        certification : certification,
        projects : projects,
        email : email,
        phone : phone,
      }

      localStorage.setItem('resume', JSON.stringify(resume));
      this.props.navigate('/download');
  }

  // handleReview = (flag) => {
  //   this.setState({admissions : []});
  // }


  render() {
    return (
      <div>
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/signup' element={<Signup uponSubmit = {this.handleSubmit}/>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/profile' element={<SProfile /> } />
          <Route path='/blogs' element={<NewBlogPage />}/>
          <Route path='/admission' element={<Admissions onAdmissionSub={this.handleAdmission} /> } />
          <Route path='/resume' element={<ResumeBuilder forResume = {this.handleResume}/>}/>
          <Route path='/download' element={<ResumeCover />}/>
          <Route path='/acceptance' element={<Acceptance />}/>
          <Route path='/adminsignup' element={<AdminSignup uponAdminSubmit = {this.handleAdminSubmit} /> }/>
          <Route path='/adminlogin' element={<AdminLogin />}/>
          <Route path='mainlogin' element={<MainLogin /> }/>
        </Routes>
      </div>
    );
  }
}

export default withRouter(App);

/*
signup - 
  <Signup uponSubmit = {this.handleSubmit} />

login - 
  <Login uponLogin = {this.handleLogin} />

profile -
  <S_Profile />

blog - 
  <BlogPage />

admission - 
  <Admissions onAdmissionSub = {this.handleAdmission} />

Acceptance -
  <Acceptance />
*/
