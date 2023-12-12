import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './nav_style.css';

class Nav extends Component {
    state = {  } 
    render() { 
        return (
            // <div className='nb-div'>
            //     <h1 id='nb-main-heading'><Link to='/'>Destiny State University</Link></h1>
            //     <ul>
            //         <li><Link to='/login'>Login</Link></li>
            //         <li><Link to='/blogs'>Blogs</Link></li>
            //         <li><Link to='/admission'>Admission</Link></li>
            //     </ul>
            // </div>
            <div>
            <div class="navbar-top">
                <header>
                    <Link to='/'>Destiny State University</Link>
                </header>
            </div>
            <div id='navbar-main'>
            <ul>
                <li><Link to="/mainlogin">Login</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/admission">Admission</Link></li>
                <li><Link to="/resume">Resume Builder</Link></li>
            </ul>
            </div>
            </div>

        );
    }
}

export default Nav;