import axios from 'axios';
import { useEffect, useState } from 'react';
import Nav from './nav';
import './new_blog_style.css';

const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts"
});

const NewBlogPage = () => {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        client.get('?_limit=10').then((response) => {
            setPosts(response.data);
        });
    }, []);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addPosts(title, body);
    }

    const handleChange = (evt) => {
        if (evt.target.name === 'title'){
            setTitle(evt.target.value);
        }
        else {
            setBody(evt.target.value);
        }
    }

    const addPosts = (title, body) => {
        client.post('', {
            title : title,
            body: body,
        }).then((response) => {
            setPosts([response.data, ...posts]);
        });
        setTitle('');
        setBody('');
    }

    const deletePost = (id) => {
        client.delete(`${id}`);
        setPosts(
            posts.filter((post) => {
                return post.id !== id;
            })
        );
    };

    return (
        <div>
            <Nav />
        <div className='blog-page-outer-div'>
            <h1 id='blog-page-main-heading'>Blogs</h1>
        <div className='blog-page-set-posts'>
            <h1 id='bpsp-main-h'>Always wanted to write a blog?</h1>
            <h2 id='bpsp-main-sh'>Look no further, we got you covered!</h2>
            <form id='bpset-form'>
                <label id='bpset-title-l'>Title:</label>
                <input id='bpset-title-ip' type='text' name='title' onChange={handleChange}/>
                <label id='bpset-body-l'>Body:</label>
                <textarea id='bpset-body-ip' name='body' onChange={handleChange}/>
                <button id='bpset-btn' onClick={handleSubmit}>Post</button>
            </form>
        </div>
        <h2 id='all-posts-heading'>All Posts</h2>
        <div className='blog-page-get-posts'>
            {posts.map((post) => {
                return (
                    <div className='post-card' key={post.id}>
                        <h2 className='post-title'>{post.title}</h2>
                        <p className='post-body'>{post.body}</p>
                        <button className="post-delete-btn" onClick={()=>deletePost(post.id)}>Delete</button> 
                    </div>
                );
            })}
        </div>
        </div>
        </div>
    );

}

export default NewBlogPage;