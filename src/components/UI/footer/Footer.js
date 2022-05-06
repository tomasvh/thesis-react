import './Footer.css'

function Footer ({ footerMessage }) {
  return (
    <div className='footer-container'>
      <h2 className='footer-text'>{footerMessage}</h2>
    </div>
  )
}

export default Footer
