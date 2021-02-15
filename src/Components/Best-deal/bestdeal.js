import React from 'react';
import { Link } from 'react-router-dom';
import './best-deal.css';


const BestDeal = () => {
    return ( 
        <React.Fragment>
            <div className="beautiful-furniture">
             <main className="container"> 
                  <div className="best-deal">
                      <div className="best-deal-content" >
                      <span className="s-title" > Most Best Deal </span>
                      <h2 className="md-title" >Modern Beautiful Furniture</h2>
                      <div className="more-section" >
                            <Link to="/" className="more-btn">View All</Link>
                      </div>
                      </div>
                     
                  </div>
             </main>
         </div>
        </React.Fragment>
     );
}
 
export default BestDeal;