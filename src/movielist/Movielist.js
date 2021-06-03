import React from 'react'
import MovieCard from '../component/moviecard/MovieCard'
import'../movielist/movielist.css'
import {Link} from 'react-router-dom'
const Movielist = ({movieArray}) => {
    return (
        <div className="list">
            {movieArray.map((item,i)=>
            <Link to ={`/${item.Title}`}  >
            <MovieCard key={i} item={item}/>
            </Link>
            )}
        </div>
    )
}

export default Movielist
