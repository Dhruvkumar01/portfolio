import React from 'react'
import './header.css';
import Cta from './Cta'
import HeaderSocial from './HeaderSocial';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Dhruv Kumar</h1>

        <h5 className="text-light">Fullstack Web Devloper</h5>

        <Cta />
        <HeaderSocial />
      </div>
    </header>
  )
}

export default Header
