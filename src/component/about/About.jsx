import React from 'react'
import Profile from '../../asset/profile.jpg'
import {FaAward} from 'react-icons/fa'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {BiUserCheck} from 'react-icons/bi'
import './about.css'

const About = () => {
  return (
    <section id='about'>
      <div className="section__heading">
        <h5>Get to know</h5>
        <h2>About me</h2>
      </div>

      <div className="container about__container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={Profile} alt="not found" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <div className="about-card">
              <FaAward className='about-icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </div>
            <div className="about-card">
              <BiUserCheck className='about-icon'/>
              <h5>Clients</h5>
              <small>100+ World Wide</small>
            </div>
            <div className="about-card">
              <AiOutlineFundProjectionScreen className='about-icon'/>
              <h5>Projects</h5>
              <small>20+ Projects</small>
            </div>
          </div>
          <p>I am afull-stack web-devloper. worked on more than 20 projects along with full ecommerce website with admin pannnel. I can work on long projects as well as short projects.</p>
          <div className="contact-link">
            <a href="#contact" className='btn a'>Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
