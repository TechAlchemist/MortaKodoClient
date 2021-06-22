import { useParams } from 'react-router';
import { useState, useEffect} from 'react';
import Blog from '../components/BlogArticle';

export default function SingleBlogView({ user }) {

    let { blogId } = useParams();

    const [blog, setBlog] = useState({});

    useEffect(() => {
        fetch(
            `http://localhost:8080/api/v1/blogs/getBlog/${blogId}`,
            {
                method: 'GET'
            }
        )
        .then(results => results.json())
        .then(data => setBlog({ data }))
        // eslint-disable-next-line
    }, [])

    return (
        <> 
            {blog.data ? <Blog blog={blog.data} user={user} /> : <> Loading </>}
            
            
        </>
    );
}

