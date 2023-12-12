import './App.css'
import Contact from './Home/Contact'
import Education from './Home/Education'
import Footer from './Home/Footer'
import Home from './Home/Home'
import NavBar from './Home/NavBar'
import Projects from './Home/Projects'
import Skills from './Home/Skills'


function App() {
  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
      <Skills></Skills>
      <Education></Education>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
