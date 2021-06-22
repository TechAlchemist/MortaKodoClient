import React from 'react';

export default function BlogFeature({ blog }) {
    return (
        <div className='card'>
            <div className='card-body'>
                <h5 className='card-title'> { blog.blogTitle } </h5>
                <p> <i className="bi bi-pencil-fill"></i> { blog.author }  </p>
                <p> <i className="bi bi-calendar-date-fill"></i> { new Date(blog.createdAt).toDateString() }  </p>
                <p> <i className="bi bi-heart-fill"></i> { blog.likes }  </p>
                <a className='card-link' href={`/blog/${blog._id}`}> 
                    <button className='read-more-btn'>
                        <i className="bi bi-book-fill"></i> Read 
                    </button> 
                </a>
                <hr />
                {blog.contentTags && blog.contentTags.map((tag, idx) => 
                    <span className="badge bg-info text-dark" key={idx}>{tag} </span>  
                )}
            </div>
        </div>
    );
}

