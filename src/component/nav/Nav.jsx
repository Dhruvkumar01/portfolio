import React from 'react'
import {AiTwotoneHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {BiBook} from 'react-icons/bi'
import {RiContactsLine} from 'react-icons/ri'
import './nav.css'

const Nav = () => {
  return (
    <nav>
      <a href="/"><AiTwotoneHome /> </a>
      <a href="#about"><AiOutlineUser /> </a>
      <a href="#experience"><BiBook /> </a>
      <a href="#services"><RiServiceLine /> </a>
      <a href="#contact"><RiContactsLine /> </a>
    </nav>
  )
}

export default Nav
