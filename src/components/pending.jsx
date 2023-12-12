import React, { Component } from 'react';
import './pending_style.css';

class Pending extends Component {
    state = {  } 
    render() { 
        return (
            <div className='item'>
                <h3 className='item-name'>{this.props.name}</h3>
                <h3 className='item-xgpa'>X GPA : {this.props.x_gpa}</h3>
                <h3 className='item-xiigpa'>XII GPA : {this.props.xii_gpa}</h3>
                <h3 className='item-rank'>Rank : {this.props.rank}</h3>
                <button id='yes' onClick={() => this.props.onYes(this.props.id)}>Yes</button>
                <button id='no' onClick={() => this.props.onNo(this.props.id)}>No</button>
            </div>
        );
    }
}

export default Pending;