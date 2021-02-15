/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './footer.css';

const Footer = () => {
    return ( 
        <>
           <div className="footer">
               <div className="first-footer" >
                 <main className="container" >
                    <h3 className="h3-title" >GET IN TOUCH</h3>
                   <div className="icons" >
                       <ul>
                         <li>
                           <span><i  className="fab fa-facebook-f fa-2x"></i></span>
                         </li>
                         <li>
                           <span><i className="fab fa-twitter fa-2x"></i></span>
                         </li>
                         <li>
                           <span><i className="fab fa-instagram-square fa-2x"></i></span>
                         </li>
                         <li>
                           <span><i className="fab fa-youtube fa-2x"></i></span>
                         </li>
                       </ul>
                       
                  </div>
                  </main>
               </div>
               {/* for second footer */}
               <div className="second-footer">
                 <main className="container">
                   <center>
                 <div className="footer-logo" >
                       <img
                        src="https://classibazaar.com.au/assets/uploads/logo_footer/beta-footer-logo-classibazaar.png"
                         alt="logo" />
                 </div>
                 </center>
                 
                 <div className="footer-list">
                     <ul>
                       <li>Contact</li>
                       <li>Listing Policy</li>
                       <li>Term of use</li>
                       <li>Privacy Policy</li>
                       <li>Cookie Policy</li>
                     </ul>
                 </div>
                 <span className="copyright">2019 All Rights Reserved © ClassiBazaar</span>
                
               </main>
               </div>
           </div>
           
      
        </>
     );
}
 
export default Footer;