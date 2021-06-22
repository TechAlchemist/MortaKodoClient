import React from 'react';

export default function BlogFeature({ blog }) {
    return (
        <div className='card'>
            <div className='card-body'>
                <h5 className='card-title'> { blog.blogTitle } </h5>
                <p> Written by: { blog.author }  </p>
                <p> Date: { new Date(blog.createdAt).toDateString() }  </p>
                <p> Likes: { blog.likes }  </p>
                <a className='card-link' href={`/blog/${blog._id}`}> Read Article Now </a>
                <hr />
                {blog.contentTags && blog.contentTags.map((tag, idx) => 
                    <span className="badge bg-info text-dark" key={idx}>{tag} </span>  
                )}
            </div>
        </div>
    );
}

