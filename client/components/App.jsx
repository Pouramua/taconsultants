import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

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
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={AboutUs} />
        <Route path='/contact' component={ContactUs} />
        <Route path='/people' component={OurPeople} />
      </div>
    </Router>
  </div>
)

export default App
