import React from 'react';
import "../styles/explore.css"
import ExploreCard from './ExploreCard';

const Explore = ({restaurant,collectionName}) => {
  return (
    <div className='max-width explore'>
        <div className="collection-title">{collectionName}
        </div>
        <div className="explore-grid">
            {restaurant.map((restaurant)=>{
                return <ExploreCard restaurant={restaurant} />
            })}
        </div>
    </div>
  );
};

export default Explore