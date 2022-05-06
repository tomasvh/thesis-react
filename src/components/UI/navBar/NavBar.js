import './NavBar.css'
import { Link } from 'react-router-dom'

function NavBar () {
  return (
    <div className='menu'>
      <nav>
        <Link to='/'><button className='nav-button'>Home</button></Link>
        <Link to='/about'><button className='nav-button'>About</button></Link>
      </nav>
    </div>
  )
}

export default NavBar
