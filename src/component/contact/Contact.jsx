import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_dund6ao', 'template_qjo2vvh', form.current, 'tJiFRMi8CKPP5XN5B')
    setTimeout(()=>{
      window.location.reload(true)
    }, 1000)
  };

  return (
    <section id='contact'>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail />
            <h4>Email</h4>
            <h5>d2000hruvkumar@gmail.com</h5>
            <a href="mailto:d2000hruvKumar@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp />
            <h4>Whatsapp</h4>
            <a href="https://api.whatsapp.com/send?phone+916201439931" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* End of CONTACT OPTIONS  */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email id' required/>
          <textarea name="message" rows="7" required></textarea>
          <button type='submit' className='btn a' placeholder='Your Message'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
