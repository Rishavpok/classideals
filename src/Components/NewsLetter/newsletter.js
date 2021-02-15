import React from 'react';
import './newsletter.css';

const NewsLetter = () => {
    return ( 
        <React.Fragment>
            <div className="newsletter">
                <main className="container" >
                <div className="news-title">
                     <h4>Signup For NewsLetter:</h4>
                     <div className="news-box" >
                     <div class="input-group lg-3">
                            <input type="text" 
                            size="70"
                            className="form-control"
                            id="input-field"
                            placeholder="Enter Your Email here"
                             aria-label="Recipient's username" 
                             aria-describedby="basic-addon2"/>
                            <div class="input-group-append">
                             <button 
                             className="btn-news" type="button">Signup Now</button>
                            </div>
                    </div>
                     </div>
                </div>
                </main>
                

            </div>
        </React.Fragment>
     );
}
 
export default NewsLetter;