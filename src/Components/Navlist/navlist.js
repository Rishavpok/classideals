/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './navlist.css';

const NavList = () => {
    return(
        <>
        <div className="nav-list">
        <main className="container">
           <ul className="nav">
            
            <li className="nav-item">
             <a className="nav-link " className="nav-link-item" href="#">Holiday & Travel</a>
             </li>
            <li className="nav-item">
                <a className="nav-link"className="nav-link-item" href="#">Things to do</a>
             </li>
            <li className="nav-item">
                <a className="nav-link" className="nav-link-item" href="#">Health & Beauty</a>
            </li>
            <li className="nav-item">
             <a className="nav-link" className="nav-link-item" href="#">Resturant&food</a>
            </li>
            <li className="nav-item">
             <a className="nav-link" className="nav-link-item" href="#">Shopping</a>
            </li>
            <li className="nav-item">
             <a className="nav-link" className="nav-link-item" href="#">Services</a>
            </li>
            <li className="nav-item">
             <a className="nav-link" className="nav-link-item" href="#">youwillbefine</a>
            </li>
            <li className="nav-item">
             <a className="nav-link" className="nav-link-item" href="#">Cosmetic Product</a>
            </li>
            </ul>
        </main>
        </div>
        </>
        
    );
}
 
export default NavList;