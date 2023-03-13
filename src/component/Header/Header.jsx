import React from 'react'
import { Link,NavLink } from 'react-router-dom'

function Header() {
  return (
      <div>
          
  <header id="header">
    <div className="header-section">
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="index.html">
                <img src="assets/img/logo.png" alt="" className="main-logo"/>
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="main_nav">
                <ul className="navbar-nav ms-auto header-menu-list">
                  <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" data-bs-toggle="dropdown" activeclassname="active" to='/'> Home </NavLink>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to='/'> Home 1 </Link></li>
                      <li><Link className="dropdown-item" to='/Home_2'> Home 2 </Link></li>
                    </ul>
                  </li>
                  <li className="nav-item"><NavLink className="nav-link" activeclassname="active" to='/AboutUs'> About Us </NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link" activeclassname="active" to='/Blog'> Blog </NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link" activeclassname="active" to='/Service' > Services </NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link" activeclassname="active" to='/ContactUs' > Contact Us </NavLink></li>
                  <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" data-bs-toggle="dropdown" activeclassname="active" to='/BlogDetails'> Pages </NavLink>
                    <ul className="dropdown-menu dropdown-menu-left">
                      <li><Link className="dropdown-item" to='/BlogDetails'> Blog Details </Link></li>
                      <li><Link className="dropdown-item" to='/Error'> 404</Link></li>
                      <li><a className="dropdown-item dropdown-arrow" href="#"> More </a>
                        <ul className="submenu submenu-left dropdown-menu">
                          <li><a className="dropdown-item" href="#">Submenu item 1</a></li>
                          <li><a className="dropdown-item" href="#">Submenu item 2</a></li>
                          <li><a className="dropdown-item" href="#">Submenu item 3</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
    </div>
  )
}

export default Header