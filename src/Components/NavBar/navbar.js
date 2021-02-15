/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './navbar.css';

const NavBar = () => {
    return ( 
        <>
        
        <nav className="navbar">
             <div className="container-fluid">
             <main className="container">
             <a className="navbar-brand">
                  <img src="https://deals.classibazaar.com.au/assets/images/classi-logo.png" /> 
            </a>
                <ul class="nav justify-content-center">
                    <li className="nav-item">
                    <div className="search-box"  className="input-group input-group-lg">
                        <input type="text"
                         className="form-control"
                        //  className="input-box"
                         placeholder="Search all product here.." 
                         size="40"
                         aria-label="Search..."
                         aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                         <button className="btn" type="button">Search</button>
                        </div>
                        </div>
                    </li>
                    <li  className="item" className="nav-item">
                     <a className="nav-link" href="#"> <i className="fas fa-user"></i> Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Australia</a>
                    </li>
                    
                </ul>
             </main>
            </div>
        </nav>

        
        </>
     );
}
 
export default NavBar;