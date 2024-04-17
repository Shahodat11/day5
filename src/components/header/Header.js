import React from 'react'
import '../header/header.css'

function Navbar() {
  return (
    <>
    <div className="container">
      <div className="nav-link2">
        <div className="nav1">
        </div>
        <div className="nav2">
          <ul className="nav-items" id="navbar-responsive">
            <li>
              <a href="#">Mobile & Computing</a>
            </li>
            <li>
              <a href="#"> TV & Audio</a>
            </li>
            <li>
              <a href="#"> Home Appliances</a>
            </li>
            <li>
              <a href="#">Samsung Live</a>
            </li>
            <li>
              <a href="#"> For Business</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar