import React from 'react'
import CV from '../../asset/Cv.pdf'

const Cta = () => {
  return (
    <div className='cta'>
      <a href={CV} download className="btn">Download cv</a>

      <a href="#contact" className='btn a'> Let's Talk</a>
    </div>
  )
}

export default Cta
