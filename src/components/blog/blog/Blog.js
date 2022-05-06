import BlogDescription from '../blogDescription/BlogDescription'
import './Blog.css'

function Blog ({ blog }) {
  const date = new Date(blog.date).toString()
  return (
    <div className='post-container' key={blog.id}>
      <p><strong>Id:</strong> {blog.id}</p>
      <p><strong>Title:</strong> {blog.title}</p>
      <p><strong>Date:</strong> {date}</p>
      <img className='blog-image' src={blog.image} alt={blog.title} />
      <BlogDescription content={blog.content} />
    </div>
  )
}

export default Blog
