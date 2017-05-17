import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

let Navbar = () => (
  <div>
    <h1>LOGO</h1>
    <Router>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='#about'>About Us</Link></li>
        <li><Link to='#contact'>Contact Us</Link></li>
        <li><Link to='#people'>Our People</Link></li>
      </ul>
    </Router>
  </div>
)

export default Navbar
