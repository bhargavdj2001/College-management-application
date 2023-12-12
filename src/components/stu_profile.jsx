import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './nav';
import './stu_profile_style.css';

const SProfile = () => {
        const login = useNavigate(); 

        useEffect(() => {
            if (!localStorage.getItem('rno_logged_in')) {
                login('/login');
            }
        });

        const handleLogout = () => {
            localStorage.removeItem('rno_logged_in');
            login('/login');
        } 

        const r_number = localStorage.getItem('rno_logged_in');
        const stu = JSON.parse(localStorage.getItem(r_number));
        return (
            <div>
                <Nav />
            <div class="s-profile-menu">
            <ul>
                <li id="s-current">Dashboard</li>
                <li>Details</li>
                <li>Attendance</li>
                <li>Performance</li>
                <li>Results</li>
                <li>Classes</li>
                <li>Faculty</li>
                <li>Events</li>
                <li><button id='sp-logout' onClick={handleLogout}>Logout</button></li>
            </ul>
            </div>
            <div className="main">
                <div className="d-a">
                    <div className="details">
                        <img src={require('./stu_profile_pic.jpg')} alt='Profile'/>
                        <h2 id="s-name">{stu.s_name}</h2><i className="fa-solid fa-user i-name"></i>
                        <h2 id="s-id">{stu.s_rno}</h2><i className="fa-solid fa-id-card i-rno"></i>
                        <h2 id="s-admno">{stu.s_admno}</h2><i className="fa-solid fa-graduation-cap i-admno"></i>
                        <h2 id="s-email">{stu.s_email}</h2><i className="fa-solid fa-envelope i-email"></i>
                        <h2 id="s-phone">{stu.s_phone}</h2><i className="fa-solid fa-phone i-phone"></i>
                        
                </div>
                <div className="o-a">
                    <h2>Overall Attendance</h2>
                    <h3>83%</h3>
                    <div class="o-a-bar">
                    <div class="bar-color"></div>
                    </div>
                </div>
            </div>
            <div class="t-e">
                <div class="today">
                    <h1>Today's classes</h1>
                    <ul>
                        <li>Operating Systems<div class="bar"><div class="os-c"></div></div></li>
                        <li>Database Management<div class="bar"><div class="db-c"></div></div></li>
                        <li>Discrete Mathematics<div class="bar"><div class="dm-c"></div></div></li>
                        <li>Compiler Design<div class="bar"><div class="cd-c"></div></div></li>
                        <li>Software Testing<div class="bar"><div class="st-c"></div></div></li>
                    </ul>
            </div>
            <div class="pending">
                <h1>Upcoming Tests</h1>
                <ul>
                    <li><h3>Neural Networks</h3><b>Sep 23</b></li>
                    <li><h3>Threads in OS</h3><b>Sep 27</b></li>
                    <li><h3>Unit Testing</h3><b>Oct 3</b></li>
                    <li><h3>Hierarchial Networks</h3><b>Oct 5</b></li>
                    <li><h3>OOPS Concepts</h3><b>Oct 8</b></li>
                </ul>
            </div>
            <div className="gpa">
                <h1>Grade Point Average</h1>
                <h2>Cumulative GPA</h2>
                <h3>8.21</h3>
                <h2>Last Semester GPA</h2>
                <h3>8.04</h3>
            </div>
            </div>
            </div>
            </div>
        );
}

export default SProfile;