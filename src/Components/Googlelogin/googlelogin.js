import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import './google.css';

// eslint-disable-next-line no-unused-vars
class GoogleLoginBtn extends Component {
    state = {  }
    responseGoogle = (response) => {
        console.log(response);
      }
    render() { 
        return ( 
            <GoogleLogin
            clientId="630245970783-mgms57b2uap01eds8j1ln7rq96rpcg15.apps.googleusercontent.com"
            buttonText="Sign in with Google"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
            className="btngoogle"
               
          />
        );
    }
}
 
export default GoogleLoginBtn;