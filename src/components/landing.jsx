import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './landing_style.css';

class Landing extends Component {
    state = {  } 
    render() { 
        return (
        <div>
            <div class="top">
                <header>
                    <Link to='/'>Destiny State University</Link>
                </header>
            </div>
    <nav>
        <ul>
            <li><Link to="/mainlogin">Login</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/admission">Admission</Link></li>
            <li><Link to="/resume">Resume Builder</Link></li>
        </ul>
    </nav>
    <div class="back-1">
        <img src={require('./img2_2.jpg')} alt='Background'/>
        <h1>Building the Future and Driving Innovation to make a lasting impact</h1>
        <button id="main-admission-link"><Link to='/admission'>Apply Now</Link></button>
    </div>
    
    <div class="box-1">
        <h2>Top Notch Faculty</h2>
    </div>
    <div class="box-2">
        <h2>World Class Amenities</h2>
    </div>
    <div class="box-3">
        <h2>Affordable Fee</h2>
    </div>

    <div class="wrap">
    <div id="cam">
        <h1>Campus Life</h1>
    </div>
    <div className="campus-life">
        <div className="campus-facilities">
            <img src={require('./s-life.jpg')} alt="Student life" className='campus-pic' />
            <h3>Student Life</h3>
            <p>A residential campus with diverse housing, exceptional dining,
                health care and over 300 student clubs and organizations so that 
                they can live to the fullest and enjoy their time here
            </p>
        </div>
        <div className="campus-facilities">
            <img src={require('./arts.jpg')} alt="Arts and Culture" className='campus-pic' />
            <h3>Arts and Culture</h3>
            <p>A rich tradition of inculcating creativity and encouraging the students
                to pursue their interests in arts
            </p>
        </div>
        <div className="campus-facilities">
            <img src={require('./recreational.jpg')} alt="Recreation and Wellness" className='campus-pic' />
            <h3>Recreation and Wellness</h3>
            <p>State-of-the-art facilities and fitness programs guided by the best coaches to encourage movement, play
                and give the students a way to relax and be more active
            </p>
        </div>
    </div>
    </div>
    <div class="adm">
        <h2>Do you think that one person can change the world? So do we.</h2>
        <button id='ab'><Link to='/admission'>Apply to join us</Link></button>
    </div>

    <div class="wrap-2">
    <h1>Courses</h1>
    <p>We offer a variety of Engineering courses that have the best faculty along with
        state-of-the-art tools and an ever evolving curriculum that make sure that every student achieves their full potential</p>
    <div class="courses">
    <div class="c">
        <img src={require("./cse.jpg")} alt="CSE" />
        <h3>Computer Science</h3>
    </div>
    <div class="c">
        <img src={require("./ece.jpg")} alt="ECE"  />
        <h3>Electronics and Communication</h3>
    </div>
    <div class="c">
        <img src={require("./eee.jpg")} alt="EEE" />
        <h3>Electrical and Electronics</h3>
    </div>
    <div class="c">
        <img src={require("./civil.jpg")} alt="CIVIL" />
        <h3>Civil</h3>
    </div>
    <div class="c">
        <img src={require("./mech.jpg")} alt="MECH" />
        <h3>Mechanical</h3>
    </div>
    <div class="c">
        <img src={require("./aero.jpg")} alt="AERO" />
        <h3>Aerospace</h3>
    </div>
    </div>
    <button id="a1">View More about Courses</button>
    </div>

    <div class="news">
        <h1>Want to know about the latest events in the University?</h1>
        <button id='events_news_btn'><Link to='/blogs'>Blogs and News</Link></button>
    </div>
    <div class="end">
        <div class="g">
            <div class="g1">
                <h3>Management</h3>
                <ul>
                    <li>About Us</li>
                    <li>Team</li>
                    <li>Careers</li>
                    <li>Dean</li>
                </ul>
            </div>
            <div class="g1">
                <h3>Contact Us</h3>
                <ul>
                    <li>Reach Out</li>
                    <li>Help</li>
                    <li>Support</li>
                    <li>Partners</li>
                </ul>
            </div>
            <div class="g1">
                <h3>Legal</h3>
                <ul>
                    <li>Terms</li>
                    <li>Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Cookies</li>
                </ul>
            </div>
        </div>
    </div>
    <div id="footer"><p>Copyright&copy; Destiny State University 2022. All Rights Reserved</p></div>
    </div>
        );
    }
}

export default Landing;