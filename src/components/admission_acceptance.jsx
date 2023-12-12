import React, { Component } from 'react';
import Nav from './nav';
import Pending from './pending';
import './pending_style.css';
import { withRouter } from './withRouter';

class Acceptance extends Component {
    state = { 
        adm :[],
        msg : '',
        flag : 0,
    } 

    // componentDidMount = () => {
    //     const adm2 = JSON.parse(localStorage.getItem('admission'));
    //     adm2.filter(a => a.pending === 1);
    //     this.setState({adm : adm2});
    // }

    handlePending = () => {
        // const adm2 = JSON.parse(localStorage.getItem('admission'));
        // adm2.filter(a => a.pending === 1);
        // this.setState({adm : adm2});
        if (localStorage.getItem('admission')!==null) {
        if (JSON.parse(localStorage.getItem('admission')).length!==0) {
            this.setState({msg : ''});
            const adm2 = JSON.parse(localStorage.getItem('admission'));
            adm2.filter(a => a.pending === 1);
            this.setState({adm : adm2});
        }
        else {
            this.setState({adm: []});
            this.setState({msg : 'No Pending Applications!'});
            console.log('No Pending Applications!');
        }
        
        }   
        else {
            this.setState({adm: []});
            this.setState({msg : 'No Pending Applications!'});
            console.log('No Pending Applications!');
        }
    }

    handleYes = (sId) => {
        const adm2 = JSON.parse(localStorage.getItem('admission'));
        const stu_acc = adm2.filter(a => a.id === sId); 
        const other_stus = adm2.filter(a => a.id !== sId);
        const stu_by_email = JSON.parse(localStorage.getItem(stu_acc[0].email));
        stu_by_email.pending = 0;
        stu_by_email.accepted = 1;
        localStorage.setItem(stu_by_email.email, JSON.stringify(stu_by_email));
        localStorage.setItem('admission', JSON.stringify(other_stus));
        // if (other_stus.length!==0){
        //     localStorage.setItem('admission', JSON.stringify(other_stus));
        // }
        // else {
        //     localStorage.removeItem('admission');
        // }
    }

    handleNo = (sId) => {
        const adm2 = JSON.parse(localStorage.getItem('admission'));
        const stu_acc = adm2.filter(a => a.id === sId); 
        const other_stus = adm2.filter(a => a.id !== sId);
        const stu_by_email = JSON.parse(localStorage.getItem(stu_acc[0].email));
        stu_by_email.pending = 0;
        stu_by_email.accepted = 0;
        localStorage.setItem(stu_by_email.email, JSON.stringify(stu_by_email));
        localStorage.setItem('admission', JSON.stringify(other_stus));
        // if (other_stus.length!==0){
        //     localStorage.setItem('admission', JSON.stringify(other_stus));
        // }
        // else {
        //     localStorage.removeItem('admission');
        // }
    }

    handleLogout = () => {
        localStorage.removeItem('admin_logged_in');
        this.props.navigate('/adminlogin');
    }

    render() {
        if (localStorage.getItem('admin_logged_in')===null) {
            this.props.navigate('/adminlogin');
        }
        else {
        return (
            <div>
                <Nav />
                <h1 id='announcement'>Admission Application To Be Checked</h1>
                <button id='show-btn' onClick={this.handlePending}>Show Pending Students</button>
                <h2 id='no-pending-stu-h2'>{this.state.msg}</h2>
                {this.state.adm.map(a => {
                    return (
                    <Pending 
                        key={a.id}
                        id={a.id}
                        name={a.name}
                        x_gpa={a.x_gpa}
                        xii_gpa={a.xii_gpa}
                        rank={a.rank}
                        onYes = {this.handleYes}
                        onNo = {this.handleNo}
                    />
                    );
                })}
                <button id='admin-logout-btn' onClick={this.handleLogout}>Logout</button>
            </div>
        );
        }
    }
}

export default withRouter(Acceptance);

/*
<Pending 
                            key = {a.id}
                            id = {a.id}
                            name = {a.name}
                            x_gpa = {a.x_gpa}
                            xii_gpa = {a.xii_gpa}
                            rank = {a.rank}
                        /> 
                */