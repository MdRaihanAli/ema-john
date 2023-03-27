import React from 'react'
import './Header.css'
import logo from '../../images/logo.svg'

function Header() {
  return (
      <nav className='header'>
        <img src={logo}alt="" />
        <div>
          <a href="">home</a>
          <a href="">Order</a>
          <a href="">Review</a>
          <a href="">Log in</a>
        </div>
      </nav>
  )
}

export default Header