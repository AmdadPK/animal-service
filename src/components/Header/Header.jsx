import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/images/logo.png'

const Header = () => {

    const [toggle, setToggle] = useState(false)
  return (
    <header className="header">
        <div className="container">
            <div className="header-info">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className={toggle ? "nav-menu show-menu" : "nav-menu"}>
                    <div className="menu">
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Service</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="search">
                        <form action="" className="search-content">
                            <input type="text" name='search' placeholder='Search..'/>
                            <button className="btn-search">
                                <i className="fas fa-search"></i>
                            </button>
                        </form>
                    </div>
                    <i className="fas fa-times nav-close"  onClick={() => setToggle(!toggle)}></i>
                </div>
                <div className="nav-toggle"  onClick={() => setToggle(!toggle)}>
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header