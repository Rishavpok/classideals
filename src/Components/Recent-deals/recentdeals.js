/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';
import './recentdeals.css';

const RecentDeal = () => {
    return ( 
        <React.Fragment>
<div className="recent-deals" >
         <main className="container inner-div" >

                 <div className="recent-title" >
                       <h4>Recent Deals</h4>
                </div>

                <div className="deals-menu">
                    <div className="row">
                          <div className="col-md-4" >
                          <div className="card" style={{width:'21rem'}}>
                                <img className="card-img-top" src="https://cbazaar.s3.amazonaws.com/uploads/deals/thumb/75ad7df96985c0316b4b2364456ef533_thumb-33.png" alt="Card image cap"/>
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
                                       <i className="far fa-clock"></i>  134d 2h Remaining
                                       <Link to="/" className="view-details">View Deal</Link>
                                       </span>
                                        
                                         
                                    </div>
                                    
                                
                                </div>
                          </div>
                          <div className="col-md-4" >
                          <div className="col-md-4" >
                          <div className="card" style={{width:'21rem'}}>
                                <img className="card-img-top" src="https://cbazaar.s3.amazonaws.com/uploads/deals/thumb/0f45a69c7649e71f85fffc2e5a49d03e_thumb-101.png" alt="Card image cap"/>
                                <div className="discount">
                                       <p>-15%</p>
                                </div>
                                <div className="bought" >
                                  <p> <i className="fas fa-tags"></i> 8+ bought</p>
                                </div>
                                <div class="card-body">
                                    <h5 className="card-title"> Chicken Biriyani </h5>
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
                                <img className="card-img-top" src="https://cbazaar.s3.amazonaws.com/uploads/deals/thumb/683c759befd6bceeb01ebd895265bd20_thumb-686.png" alt="Card image cap"/>
                                <div className="discount">
                                       <p>-15%</p>
                                </div>
                                <div className="bought" >
                                  <p> <i className="fas fa-tags"></i> 8+ bought</p>
                                </div>
                                <div class="card-body">
                                    <h5 className="card-title"> Lockdown offer </h5>
                                    <p class="card-text">Grilled lamb cooked with carrot, capsicum</p>

                                    
                                    
                                </div>
                                <div className="card-button" >
                                       <span className="hello" >
                                       <i className="far fa-clock"></i>  134d 2h Remaining
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
 
export default RecentDeal;