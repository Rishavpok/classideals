import React from 'react';
import BestDeal from '../Best-deal/bestdeal';
import RecentDeal from '../Recent-deals/recentdeals';
import PopularDeals from '../Popular Deals/popular-deals';
import Carousel from '../Carousel/carousel';
import './Homescreen.css';

const HomeScreen = () => {
    return ( 
      <React.Fragment>
          {/* <Carousel /> */}
          <RecentDeal/>
          <BestDeal/>
          <PopularDeals/>
      </React.Fragment>
     );
}
 
export default HomeScreen;