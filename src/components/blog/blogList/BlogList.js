import Blog from '../blog/Blog'
import { useEffect, useState } from 'react'
import './BlogList.css'
import axios from 'axios'

function BlogList () {
  const [blogs, setBlogs] = useState([])
  const [message] = useState('')

  useEffect(() => {
    const getBlogs = async () => {
      await axios.get('assets/blogs.json').then(response => {
        setBlogs(response.data)
      })
    }
    getBlogs()
  }, [])

  return (
    <div>
      <h3>{message}</h3>
      <div className='container'>
        {blogs.map((blog) => (
          <Blog blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  )
}
export default BlogList
