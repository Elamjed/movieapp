import React from 'react'
import '../description/description.css';
import {useEffect,useState} from 'react'
import ReactPlayer from "react-player";
const Description = ({match,data}) => {
     const [movie,setMovie]= useState("")
   useEffect(() => {
        setMovie(data.find(el=>el.Title==match.params.Title))
       
    }, [])
    return (
      <div className="new">
      <div className="body_movie">
          <ReactPlayer url={movie.trailler}></ReactPlayer>
<div className="desc">
<h5 className="Title">{movie.Title}</h5>
<p className="Type">{movie.Type}</p>
<span className="Year">{movie.Year}</span>
 <span className="rate float-right">{movie.Rate} / 5</span>
</div>
      </div>
      </div>

    )
}

export default Description
