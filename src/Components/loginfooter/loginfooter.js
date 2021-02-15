import React from 'react';
import { Link } from 'react-router-dom';
import './loginfooter.css';

const LoginFooter = () => {
    return ( 
        <React.Fragment>
              <div className="login-footer" >
                  <main className="container">
                   <div className="row" >
                      <div className="col-md-2" >
                          <div className="list-title" >
                              <h5>Car For Sale</h5>
                          </div>
                             <div className="login-list">  
                                   <li><Link className="list-menu" to="/" >Western Australia</Link></li>
                                   <li><Link className="list-menu" to="/" >Victoria</Link></li>
                                   <li><Link className="list-menu" to="/" >Tasmania</Link></li>
                                   <li><Link className="list-menu" to="/" >South Australia</Link></li>
                                   <li><Link className="list-menu" to="/" >QueensLand</Link></li>
                                   <li><Link className="list-menu" to="/" >Northen Teritory</Link></li>
                                   <li><Link className="list-menu" to="/" >South Wales West</Link></li>
                                   <li><Link className="list-menu" to="/" >Australian Capital Teritory</Link></li>       
                             </div>
                      </div>
                      <div className="col-md-2" >
                      <div className="list-title" >
                              <h5>Bike For Sale</h5>
                          </div>
                             <div className="login-list">  
                                   <li><Link className="list-menu" to="/" >Western Australia</Link></li>
                                   <li><Link className="list-menu" to="/" >Victoria</Link></li>
                                   <li><Link className="list-menu" to="/" >Tasmania</Link></li>
                                   <li><Link className="list-menu" to="/" >South Australia</Link></li>
                                   <li><Link className="list-menu" to="/" >QueensLand</Link></li>
                                   <li><Link className="list-menu" to="/" >Northen Teritory</Link></li>
                                   <li><Link className="list-menu" to="/" >South Wales West</Link></li>
                                   <li><Link className="list-menu" to="/" >Australian Capital Teritory</Link></li>       
                             </div>
                      </div>
                      <div className="col-md-2" >
                      <div className="list-title" >
                              <h5>Real Estate For Sale</h5>
                          </div>
                             <div className="login-list">  
                                   <li><Link className="list-menu" to="/" >Western Australia</Link></li>
                                   <li><Link className="list-menu" to="/" >Victoria</Link></li>
                                   <li><Link className="list-menu" to="/" >Tasmania</Link></li>
                                   <li><Link className="list-menu" to="/" >South Australia</Link></li>
                                   <li><Link className="list-menu" to="/" >QueensLand</Link></li>
                                   <li><Link className="list-menu" to="/" >Northen Teritory</Link></li>
                                   <li><Link className="list-menu" to="/" >South Wales West</Link></li>
                                   <li><Link className="list-menu" to="/" >Australian Capital Teritory</Link></li>       
                             </div>
                      </div>
                      <div className="col-md-2" >
                      <div className="list-title" >
                              <h5>Jobs</h5>
                          </div>
                             <div className="login-list">  
                                   <li><Link className="list-menu" to="/" >Western Australia</Link></li>
                                   <li><Link className="list-menu" to="/" >Victoria</Link></li>
                                   <li><Link className="list-menu" to="/" >Tasmania</Link></li>
                                   <li><Link className="list-menu" to="/" >South Australia</Link></li>
                                   <li><Link className="list-menu" to="/" >QueensLand</Link></li>
                                   <li><Link className="list-menu" to="/" >Northen Teritory</Link></li>
                                   <li><Link className="list-menu" to="/" >South Wales West</Link></li>
                                   <li><Link className="list-menu" to="/" >Australian Capital Teritory</Link></li>       
                             </div>
                      </div>
                      <div className="col-md-4" >
                             <div className="contact">
                                    <h5>Contact Us</h5>
                                    <p>Connet with us on Social media</p>
                             </div>
                             <div className="media" >
                        
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
                      >
                             </div>
                      </div>
                   </div>
                   </main>
              </div>
        </React.Fragment>
     );
}
 
export default LoginFooter;