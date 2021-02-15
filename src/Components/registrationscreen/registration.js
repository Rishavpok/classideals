import React from 'react';
import './registration.css';
import FaceBook from '../facebook/Facebook';
import GoogleLoginBtn from '../Googlelogin/googlelogin';
import LoginFooter from '../loginfooter/loginfooter';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
    return ( 
        <React.Fragment>
 <div className="registration-form">
               <div className="registration">
                   <h4>Register Now</h4>
               </div>
     <div className="input-register">
                <div className="row">
                    <div className="col-md-8" >
                        <div class="input-group">
                             <input
                              type="text" 
                              id="firstname"
                              placeholder="Firstname*"
                              className="form-control"/>
                             <input 
                             type="text"
                             id="lastname" 
                             placeholder="Lastname*"
                             className="form-control"/>
                        </div>
                            <br/>
                            <input type="email"
                                className="form-control" 
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email*"/>
                                 <br/>
                                <input type="password"
                                    className="form-control" 
                                    id="exampleInputPassword1"
                                    placeholder="Password*"/>
                                    <br/>
                                    <input type="password"
                                    className="form-control" 
                                    id="exampleInputPassword1"
                                    placeholder="Retype Password*"/>
                          <div className="register-text">
                                <p>By signing up I agree to Classibazaar Terms of User and Privacy Policy 
                                    and I consent to receiving marketing 
                                    from Classibazaar and third party offers
                                </p>
                          </div>
                          <div className="register-button">
                          <button 
                                type="button" 
                                className="btn btn-primary btn-block">Register Now</button>
                          </div>
                          <div className="already-register" >
                                          <p>Already register with Classibazaar?<Link to="/">Sign in</Link></p>
                          </div>
                </div>
                <div className="col-md-4" >
                <div className="social-network">
                            <FaceBook />
                            <GoogleLoginBtn/>
                </div>
                </div>
                    
            </div>                   
                         
    </div>
                         
                
 </div>
           <LoginFooter />
        </React.Fragment>
     );
}
 
export default RegistrationForm;