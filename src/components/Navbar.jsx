import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return<> <div>
    <ul id="navbar">
        <li><Link to='/all' href="" >All</Link></li>
        <li><Link to='/fullstack' href="" >Full stack Development</Link></li>
        <li><Link to='/datascience' href="" >Data science</Link></li>
        <li><Link to='/cybersecurity' href="" >Cyber Security</Link></li>
        <li><Link to='/carrer' href="" >Career</Link></li>

    </ul>
  </div>


  </>
}

export default Navbar;