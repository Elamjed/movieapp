import React from 'react'
import MovieCard from '../component/moviecard/MovieCard'
import'../movielist/movielist.css'
const Movielist = ({movieArray}) => {
    return (
        <div className="list">
            {movieArray.map((item,i)=>
            <MovieCard key={i} item={item}/>
            )}
        </div>
    )
}

export default Movielist
