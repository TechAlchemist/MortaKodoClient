import { useState, useEffect } from 'react';
import BlogFeature from '../components/BlogFeature';

export default function Home(props) {

  const [blogPosts, allBlogPosts] = useState({});

  useEffect(() => {
      fetch(
          `http://localhost:8080/api/v1/blogs/getAllBlogs`,
          {
              method: 'GET'
          }
      )
      .then(results => results.json())
      .then(data => allBlogPosts({ data }))
      // eslint-disable-next-line
  }, [])

  return (
    <div className='container'>
      {blogPosts.data && blogPosts.data.results.map((blog, idx) => 
        <BlogFeature blog={blog} key={idx} />
      )}
    </div>
  );
}
