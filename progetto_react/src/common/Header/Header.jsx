import React from 'react'
import "./Header.css"
import logo from '../../logo.svg'

const Header = () => {
  return (
    <header>
        <img src = {logo} alt= "logo" className = "logo"/>
        <div>
            <ul className='navbar'>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About us</a>
                </li>
                <li>
                    <a href="/">Contact</a>
                </li>
                
            </ul>
        </div>
    </header>
  )
}

export default Header