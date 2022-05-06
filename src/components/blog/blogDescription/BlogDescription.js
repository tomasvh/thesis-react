import { useEffect } from 'react'

function BlogDescription ({ content }) {
  const renderList = content.map((item, index) => <div key={index}>{item}</div>)

  useEffect(() => {
  })
  return (
    <div className='text-container'>
      {renderList}
    </div>
  )
}

export default BlogDescription
