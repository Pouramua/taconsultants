import React from 'react'

import Navbar from './Navbar'
import Home from './Home'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import OurPeople from './OurPeople'

let App = () => (
  <div className='app'>
    <Navbar />
    <Home />
    <AboutUs />
    <OurPeople />
    <ContactUs />
  </div>
)

export default App
