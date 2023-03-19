import React from 'react'
import profile from '../../asset/profile.jpg'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
      <img src={profile} alt="Profile"  className='header__social__image'/>
    </div>
  )
}

export default HeaderSocial
