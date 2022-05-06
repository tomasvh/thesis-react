import './Header.css'

function Header ({ headerMessage }) {
  return (
    <div className='header-container'>
      <h1 className='title'>{headerMessage}</h1>
    </div>
  )
}

export default Header
