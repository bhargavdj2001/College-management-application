import React, { Component } from 'react';
import './blog_style.css';

class Blog extends Component {
    state = {  } 
    render() { 
        return (
            <div className='blog-item'>
                <h4 className='blog-topic'>{this.props.topic}</h4>
                <h4 className='blog-timing'>{this.props.timing}</h4>
                <h4 className='blog-title'>{this.props.title}</h4>
                <h4 className='blog-body'>{this.props.body}</h4>
                <button className='blog-btn'>Continue Reading</button>
            </div>
        );
    }
}

export default Blog;