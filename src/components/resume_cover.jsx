import React, { Component } from 'react';
import './resume_cover_style.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Nav from './nav';

class ResumeCover extends Component {
    state = {  } 

    download = () => {
        const input = document.getElementById('res1');
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF();
            pdf.addImage(imgData, "JPEG", 10, 10, 190, 280);
            pdf.save("my_resume.pdf");
        });
    }

    render() { 
        const resume = JSON.parse(localStorage.getItem('resume'));
        return (
            <div>
                <Nav />
            <div className='res-sh-page'id='res1'>
                <h2 id='res-sh-name'>{resume.name}</h2>
                <h3 id='res-sh-title'>{resume.title}</h3>
                {!resume.work?null:<div><h2 id='res-sh-l-work'>Experience:</h2>
                <h3 id='res-sh-work'>{resume.work}</h3></div>}
                <h2 id='res-sh-l-edu'>Educational Qualifications:</h2>
                <h3 id='res-sh-l-school'>School :-</h3>
                <h3 id='res-sh-school'>{resume.school}</h3>
                <h3 id='res-sh-l-inter'>Intermediate:-</h3>
                <h3 id='res-sh-inter'>{resume.inter}</h3>
                <h3 id='res-sh-l-college'>College:-</h3>
                <h3 id='res-sh-college'>{resume.college}</h3>
                {(resume.skills || resume.certification || resume.projects)?<h2 id='res-sh-l-sc'>Skills and Certifications:</h2>:null}
                {!resume.skills?null:<div>
                <h3 id='res-sh-l-skills'>Skills:-</h3>
                <h3 id='res-sh-skills'>{resume.skills}</h3></div>
                }
                {!resume.certification?null:<div><h3 id='res-sh-l-certifications'>Certifications:-</h3>
                <h3 id='res-sh-certifications'>{resume.certification}</h3></div>}
                {!resume.projects?null:<div><h3 id='res-sh-l-projects'>Projects:-</h3>
                <h3 id='res-sh-projects'>{resume.projects}</h3></div>}
                <h3 id='res-sh-email'>{resume.email}</h3><i className="fa-solid fa-envelope" id='res-sh-email-icon'></i>
                <h3 id='res-sh-phone'>{resume.phone}</h3><i className="fa-solid fa-phone"  id='res-sh-phone-icon'></i>
            </div>
            <button id='res-sh-download-btn' onClick={this.download}>Download Resume</button>
            </div>
        );
    }
}

export default ResumeCover;