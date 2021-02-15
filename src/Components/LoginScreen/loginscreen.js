/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import LoginFooter from '../loginfooter/loginfooter';
import FaceBook from '../facebook/Facebook';
import GoogleLoginBtn from '../Googlelogin/googlelogin';
import './loginscreen.css';

const LoginScreen = () => {
    return ( 
        <React.Fragment>
        <div className="form-wrapper">
             {/* <main className="container" > */}
             <div className="login" >
                 <h4>Login Now</h4>
             </div>

             <div className="input-container" >
             <input type="email"
              className="form-control" 
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"/>
              <br/>
              <input type="password"
               className="form-control" 
               id="exampleInputPassword1"
               placeholder="Password"/>
               <div className="form-group">
                          <div className="checkbox">
                                  <input id="rememberme" type="checkbox" value="rememberme" ></input>
                                  <label className="rememberme" htmlFor="rememberme">Remember me</label>
                                  <a  className="forgetpassword" href="https://classibazaar.com.au/forgot-password">Forgot Password?</a>
                          </div>
                          
                         
                   </div>
                <div className="loginbutton" >
                <button 
                type="button" 
                className="btn btn-primary btn-block">Login</button>
                 <div className='login-text' >
                    <p className="text" >Don’t have an account with Classibazaar?<Link to="/">Sign up</Link> </p>
                 </div>
                 <div style={{textAlign:'center',margin:'auto', padding:'5px'}} >OR</div>
                 <div className="social-network" >
                 <FaceBook/>
                 <GoogleLoginBtn/>
                 </div>
                 
                </div>
                </div>
             
             {/* </main> */}
         </div>
         <LoginFooter/>
        </React.Fragment>
     );
}
 
export default LoginScreen;