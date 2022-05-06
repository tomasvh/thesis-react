import './App.css'
import Header from './components/UI/header/Header'
import NavBar from './components/UI/navBar/NavBar'
import MainSection from './components/UI/mainSection/MainSection'
import Footer from './components/UI/footer/Footer'

function App () {
  const headerMessage = 'Welcome to Tomas Blog made in Svelte'
  const footerMessage = 'Here be the foot'
  const mainMessage = 'Welcome to the Blog page'
  const aboutMessage = 'So here is a section about me, my self, and everything in between'

  return (
    <div>
      <Header headerMessage={headerMessage} />
      <NavBar />
      <MainSection mainMessage={mainMessage} aboutMessage={aboutMessage} />
      <Footer footerMessage={footerMessage} />
    </div>
  )
}

export default App
