import { useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { GrFormClose } from 'react-icons/gr'
import './services.css'

const Services = () => {
  const [toggle, setToggle]= useState(0);

  const handleClick= (value)=>{
    setToggle(value);
  }

  return (
    <section id='services'>
      <div className="section__heading">
        <h3 style={{"letterSpacing": "4px"}}>WHAT I OFFER</h3>
        <h2 className='text-primary'>Services</h2>
      </div>
      <div className="container services__container">
        <div className="service ui">
          <h2 className='text-primary service-head'> <BsFillPatchCheckFill className='service-icon' /> UI/UX <br />DESIGNER</h2>
          <div className="service-modal-view" onClick={()=>handleClick(1)}>View more <AiOutlineArrowRight className='view-icon'/></div>
          <div className={toggle===1 ?"active-modal service-modal": "service-modal"}>
            <div className="service-modal-container">
              <h2 className="service-modal-title">UI/UX DESIGNER</h2>
              <p className="service-modal-desc">I am a Qualified UI/UX designer with more than 1 year of service</p>
              <ul className="service-modal-list-container">
                <li className="service-modal-list-item">
                  <BsFillPatchCheckFill className='service-icon' />
                  <span> I devlop User interface </span>
                </li>
                <li className="service-modal-list-item">
                  <BsFillPatchCheckFill className='service-icon' />
                  <span> Web page Devlopment </span>
                </li>
                <li className="service-modal-list-item">
                  <BsFillPatchCheckFill className='service-icon' />
                  <span> I devlop UX element Interaction</span>
                </li>
                <li className="service-modal-list-item">
                  <BsFillPatchCheckFill className='service-icon' />
                  <span> I can devlop your company website</span>
                </li>
              </ul>
              <div className="service-modal-close" onClick={()=>handleClick(0)}> <GrFormClose className='close-icon' /> </div>
            </div>
          </div>
        </div>
        <div className="service web">          
          <h2 className='text-primary service-head'> <BsFillPatchCheckFill className='service-icon'/> Web <br />DEVLOPMENT</h2>
          <div className="service-modal-view" onClick={()=>handleClick(2)}>View more <AiOutlineArrowRight className='view-icon'/></div>
          <div className={toggle===2 ? "active-modal service-modal" : "service-modal"}>
            <div className="service-modal-container">
              <h2 className="service-modal-title">WEB DEVLOPMENT</h2>
              <p className="service-modal-desc">I am a Qualified Full-stack devloper with more than 1 year of service</p>
              <ul className="service-modal-list-container">
                <li className="service-modal-list-item">
                  <BsFillPatchCheckFill className='service-icon' />
                  <span> I create full-stack website </span>
                </li>
                <li className="service-modal-list-item">
                  <BsFillPatchCheckFill className='service-icon' />
                  <span> Web page Devlopment </span>
                </li>
                <li className="service-modal-list-item">
                  <BsFillPatchCheckFill className='service-icon' />
                  <span> I create websites</span>
                </li>
                <li className="service-modal-list-item">
                  <BsFillPatchCheckFill className='service-icon' />
                  <span> I can devlop your company website</span>
                </li>
              </ul>
              <div className="service-modal-close" onClick={()=>handleClick(0)}> <GrFormClose className='close-icon' /> </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
