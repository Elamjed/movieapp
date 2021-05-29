
import React from 'react';
import '../FIlter/Filter.css';
import { Button } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';

const Filter = ({handleSearch, handleSearchrating}) => {
  const changeRating=( newRating ) =>{
    handleSearchrating(newRating)
    };
    return (
<div className="topnav">
  <div className="searchtxt">
  <input onChange={(e)=>handleSearch(e.target.value)}  type="text" placeholder="Search.." className="ser"/>
  <Button  className="btn" variant="primary">Search</Button>
  </div>
  <StarRatings
          starRatedColor="Yellow"
          changeRating={changeRating}
          numberOfStars={5}
          name='rating'
          starDimension='20px'
  />
  <div className="seachraiting">
  <input onChange={(e)=>handleSearchrating(e.target.value)}  type="text" placeholder="Search.." className="ser"/>
  <Button  className="btnrating" variant="primary">Search rating</Button>
  </div>
</div>

 )
}

export default Filter
