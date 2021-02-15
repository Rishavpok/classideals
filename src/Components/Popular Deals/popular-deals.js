/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';
import './popular-deals.css';

const PopularDeals = () => {
    return ( 
        <React.Fragment>
          <div className="popular-deals" >
         <main className="container">

                <div className="popular-title" >
                       <h4 className="popular-text" >Popular Deals</h4>
                </div>

                <div className="deals-menu">
                    <div className="row">
                          <div className="col-md-4" >
                          <div className="card" style={{width:'21rem'}}>
                                
                                <img className="card-img-top" className="card-image" src="https://cbazaar.s3.amazonaws.com/uploads/deals/thumb/75ad7df96985c0316b4b2364456ef533_thumb-33.png" alt="Card image cap"/>
                                <div className="discount">
                                       <p>-15%</p>
                                </div>
                                <div className="bought" >
                                  <p> <i className="fas fa-tags"></i> 8+ bought</p>
                                </div>
                                
                                <div class="card-body">
                                    <h5 className="card-title"> Mamiaya Lamb Bhutuwa </h5>
                                    <p class="card-text">Grilled lamb cooked with carrot, capsicum</p>
   
                                </div>
                                <div className="card-button" >
                                       <span className="hello" >
                                       <i className="far fa-clock"></i> 134d 2h Remaining
                                       <Link to="/" className="view-details">View Deal</Link>
                                       </span>   
                                    </div>
                                </div>
                          </div>
                          <div className="col-md-4" >
                          <div className="col-md-4" >
                          <div className="card" style={{width:'21rem'}}>
                                <img className="card-img-top" className="card-image" src="https://cbazaar.s3.amazonaws.com/uploads/deals/thumb/f757f465b7f0329628ce935a64ca0b59_thumb-577.png" alt="Card image cap"/>
                                <div className="discount">
                                       <p>-15%</p>
                                </div>
                                <div className="bought" >
                                  <p> <i className="fas fa-tags"></i> 8+ bought</p>
                                </div>
                                <div class="card-body">
                                    <h5 className="card-title"> Sanitizer on Sale </h5>
                                    <p class="card-text">Grilled lamb cooked with carrot, capsicum</p>

                                    
                                    
                                </div>
                                <div className="card-button" >
                                       <span className="hello" >
                                       <i className="far fa-clock"></i> 134d 2h Remaining
                                       <Link to="/" className="view-details">View Deal</Link>
                                       </span>
                                        
                                         
                                    </div>
                                </div>
                          </div>
                          </div>
                          <div className="col-md-4" >
                          <div className="col-md-4" >
                          <div className="card" style={{width:'21rem'}}>
                                <img className="card-img-top" className="card-image" src="https://cbazaar.s3.amazonaws.com/uploads/deals/thumb/7add501191186f9c1c26c478131a59a8_thumb-707.png" alt="Card image cap"/>
                                <div className="discount">
                                       <p>-15%</p>
                                </div>
                                <div className="bought" >
                                  <p> <i className="fas fa-tags"></i> 8+ bought</p>
                                </div>
                                <div class="card-body">
                                    <h5 className="card-title"> Sanitizer or mask </h5>
                                    <p class="card-text">Grilled lamb cooked with carrot, capsicum</p>

                                    
                                    
                                </div>
                                <div className="card-button" >
                                       <span className="hello" >
                                       <i className="far fa-clock"></i> 134d 2h Remaining
                                       <Link to="/" className="view-details">View Deal</Link>
                                       </span>
                                        
                                         
                                    </div>
                                </div>
                          </div>
                          </div>
                    </div>
                </div>

         </main>
</div>
        </React.Fragment>
     );
}
 
export default PopularDeals;