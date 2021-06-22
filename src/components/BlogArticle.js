import { useState } from 'react';

export default function BlogArticle( { blog, user } ) {
    const baseURL = 'http://localhost:8080/api/v1/blogs/';
    const [likes, setLikes] = useState(blog[0].likes);
    const [likeToggled, setLikeToggled] = useState(false);
    const [likeButtonIcon, setLikeButtonIcon] = useState('bi bi-heart');

    function toggleLikeButton() {
        setLikeToggled(!likeToggled);      
        (likeToggled) ? dislikePost() : likePost(); 
    }

    async function likePost() {
        setLikes(likes + 1);
        setLikeButtonIcon('bi bi-heart-fill');
        await fetch(baseURL + `likeBlog/${blog[0]._id}`, {
            method: 'PUT'
        });
    }

    async function dislikePost() {
        setLikes(likes - 1);
        setLikeButtonIcon('bi bi-heart');
        await fetch(baseURL + `unlikeBlog/${blog[0]._id}`, {
            method: 'PUT'
        });
    }

    return (
        <div className='container'>
            <div className='container' id='breadcrumb-container'>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Blog</li>
                    </ol>
                </nav>
            </div>
            <hr/>
            <h1> { blog && blog[0].blogTitle } </h1>
            <p> <i className="bi bi-pencil-fill"></i> {blog && blog[0].author } </p>
            <p> <i className="bi bi-calendar-date-fill"></i> 
            {blog && new Date(blog[0].createdAt).toDateString() } </p>
            <button className='btn btn-danger' id='like-button' onClick={toggleLikeButton} disabled={user === undefined} > 
                <i className={likeButtonIcon}></i> { likes } 
            </button>
            <p> {blog && blog[0].blogContent } </p>
        </div>
    );
}