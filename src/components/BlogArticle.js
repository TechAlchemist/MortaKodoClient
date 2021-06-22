import React from 'react';

export default function BlogArticle( {blog} ) {
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
            <p> <i className="bi bi-heart-fill"></i> {blog && blog[0].likes } </p>
            <p> {blog && blog[0].blogContent } </p>
        </div>
    );
}