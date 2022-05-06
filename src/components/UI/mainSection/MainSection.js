import './MainSection.css'
import BlogList from '../../blog/blogList/BlogList'
import { Routes, Route } from 'react-router-dom'
import About from '../../about/About'

function MainSection ({ mainMessage, aboutMessage }) {
  return (
    <main className='content'>
      <Routes>
        <Route path='/' element={<BlogList message={mainMessage} />} />
        <Route path='/about' element={<About aboutMessage={aboutMessage} />} />
        <Route path='*' element={<BlogList message={mainMessage} />} />
      </Routes>
    </main>
  )
}

export default MainSection
