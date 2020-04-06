import React from 'react'
import Link from 'gatsby-link'

import './header.css'
class Header extends React.Component {

  handleClick = (event) => {
    document.querySelector('.navbar-menu').classList.toggle('is-active');
  }

  render() {
    return (
      <nav className="Header navbar" role="navigation" aria-label="main navigation">
      <div className="container nav-container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">ANDREW STEINMEYER</a>
          {/* <a className="navbar-burger" onClick={this.handleClick} role="button" aria-label="menu" aria-expanded="false" data-target="#navMenu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a> */}
        </div>
        {/* <div className="navbar-menu" id="navMenu">
          <div className="navbar-start"></div>
          <div className="navbar-end">
            <div className="navbar-item"><Link to="/#my-work">Portfolio</Link></div>
            <div className="navbar-item"><Link to="/#my-cool-header">Contact</Link></div>
          </div>
        </div> */}
      </div>
    </nav>
    )
  }
}

export default Header
