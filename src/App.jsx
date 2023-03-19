import React from 'react'
import Header from './component/header/Header.jsx'
import Footer from './component/footer/Footer'
import Nav from './component/nav/Nav'
import About from './component/about/About'
import Experience from './component/experience/Experience'
import Services from './component/services/Services'
import Contact from './component/contact/Contact'
import Testimonial from './component/testimonial/Testimonial'
import Project from './component/project/Project.jsx'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Project />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}

export default App
