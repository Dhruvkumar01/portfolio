import React from 'react'
import './footer.css'
import {FiLinkedin} from 'react-icons/fi'
import {AiFillGithub} from 'react-icons/ai'
import {CiFacebook} from 'react-icons/ci'



const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <h2>Dhruv Kumar</h2>
        <ul className='section-links'>
          <li><a href="/">Home</a></li>
          <li><a href="#about">about</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      
        <ul className="social-logos">
          <li><a href="https://www.linkedin.com/in/dhruv-saxena-a77187252/" target='_blank' className='social-logo' rel="noreferrer"><FiLinkedin /></a></li>
          <li><a href="https://github.com/dhruvkumarsaxena" target="_blank" className='social-logo' rel="noreferrer"><AiFillGithub /> </a></li>
          <li><a href="https://facebook.com" target="_blank" className='social-logo' rel="noreferrer"><CiFacebook /></a></li>
        </ul>
        

        <h3>All Copyright &copy; reserved to Dhruv</h3>
      </div>
    </footer>
  )
}

export default Footer
