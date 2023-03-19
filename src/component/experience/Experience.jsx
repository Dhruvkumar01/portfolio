import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import './experience.css'

const Experience = () => {
  return (
    <section id='experience'>
      <div className="section__heading">
        <h3>What Skills I have</h3>
        <h2 className='text-primary'>My Skills</h2>
      </div>

      <div className="container experience__container">

        {/* --------  FrontEnd Container  ----------- */}
        <div className="frontend experience__container__skills">
          <h2 className='text-primary'>Frontend Skills</h2>
          <div className="skills">
            <div className="skill">
              <div className="skill-name">
                <BsFillPatchCheckFill className='skill-icon' />
                <h2>HTML</h2>
              </div>
              <h5>Experienced</h5>

            </div>
            <div className="skill">
              <div className="skill-name">
                <BsFillPatchCheckFill className='skill-icon' />
                <h2>CSS</h2>
              </div>
              <h5>Experienced</h5>
            </div>
            <div className="skill">
              <div className="skill-name">
                <BsFillPatchCheckFill className='skill-icon' />
                <h2>React</h2>
              </div>
              <h5>Experienced</h5>
            </div>
            <div className="skill">
              <div className="skill-name">
                <BsFillPatchCheckFill className='skill-icon' />
                <h2>JavaScript</h2>
              </div>
              <h5>Experienced</h5>
            </div>
          </div>
        </div>

        {/* ----------Backend Container --------- */}

        <div className="backend experience__container__skills">
          <h2 className='text-primary'>Backend Skills</h2>
          <div className="skills">
            <div className="skill">
              <div className="skill-name">
                <BsFillPatchCheckFill className='skill-icon' />
                <h2>NodeJS</h2>
              </div>
              <h5>Experienced</h5>
            </div>
            <div className="skill">
              <div className="skill-name">
                <BsFillPatchCheckFill className='skill-icon' />
                <h2>MongoDB</h2>
              </div>
              <h5>Experienced</h5>
            </div>
            <div className="skill">
              <div className="skill-name">
                <BsFillPatchCheckFill className='skill-icon' />
                <h2>MySQL</h2>
              </div>
              <h5>Intermediate</h5>
            </div>
            <div className="skill">
              <div className="skill-name">
                <BsFillPatchCheckFill className='skill-icon' />
                <h2>Python</h2>
              </div>
              <h5>Intermediate</h5>
            </div>
          </div>
        </div>
        {/* --------- backend end ----------- */}

      </div>
    </section>
  )
}

export default Experience
