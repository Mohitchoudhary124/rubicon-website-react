import React from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  logo from "../Components/images/logo.png";
import  helpcircle from "../Components/images/helpcircle.png";
import {Outlet ,Link } from "react-router-dom";



function Header() {
  return (
    <nav className='navbar navbar-expand-lg me-auto'>
         <div className='container-fluid'>
            <Link className='navbar-brand' to="/">
            <img src={logo} alt='logo'></img>
            </Link>
            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className='offcanvas offcanvas-start desk_header_menu ' id='navbarOffcanvas' tabindex='-1' area-labelledby='offcanvasNavbarLabel'>
            {/* <div className='offcanvas-header'>
                <a className='navbar-brand' href='#'>
                    <img src={logo} alt='logo image'></img>
                </a>
                <button type='button' className='btn-close btn-close-white text-reset' data-bs-dismiss='offcanvas' aria-label='Close'></button>
            </div> */}
            <nav className='offcanvas-body'>
                <ul className='navbar-nav ms-auto mb-2 mb-lg-0 setNav'>
                    <li className='nav-item'>
                        {/* <a className='header-link' href='#'>Group Classes</a> */}
                       <Link to="/Groupclasses" className='header-link'>Group Classes</Link> 
                        <Link to="/Findteacher" className='header-link' >Find a Teacher</Link>
                        <Link to="/Applytoteach" className='header-link' >Apply to Teach</Link>
                    </li>
                </ul>
                <div className='action-btns'>
                    <Link to='/' className='help-icon secondary-text'><img src={helpcircle} alt='help circle'></img> </Link>
                    <Link to="/Login" className='login white-bg small-rubicon-btn' data-bs-toggle='modal' data-bs-target='#login' >Login</Link>
                    <Link to="/Signup" className='signup primary-bg small-rubicon-btn' data-bs-toggle='modal' data-bs-target='#signup'>Signup</Link>
                </div>
              </nav>
              <Outlet />

           </div>
         </div>
    </nav>
  )
}

export default Header