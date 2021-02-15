/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import './facebook.css';


class FaceBook extends Component {
    state = { 
        auth: false,
        name: '',
        picture:''
     }
     componentClicked = () => {
         console.log('clicked')
     }

     responseFacebook = (response) => {
       if(response.status !== 'unknown'){
        this.setState({
            auth: true,
            name:response.name,
            picture:response.picture.data.url
        });
       }
       
    }

   
       

    render() { 
        let facebookData;

        this.state.auth ? 
        facebookData = (
            <div>
                <img src={this.state.picture} />
                 <h1>{this.state.name}</h1>
            </div>
        ):
        facebookData = (
            <FacebookLogin
            appId="371212024114301"
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook}
            cssClass="btnfacebook"
            textButton = "&nbsp;&nbsp;Sign In with Facebook"
            icon={<i className="fab fa-facebook-square"></i>}
             />
        )
        return ( 
            <div>
                {facebookData}  
            </div>
         );
    }
}
 
export default FaceBook;