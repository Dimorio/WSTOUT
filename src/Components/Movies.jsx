import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
const Movies = () => {
    const [movie, setMovie] = useState([])
    const Url = `https://api.themoviedb.org/3/discover/movie?api_key=f859b40fd1b7ffb7b279a4c41c3d0716`
    const API_IMG = `https://image.tmdb.org/t/p/w1280/`
    const getMovie = async ()=>{
        const response = await fetch(Url)
        const responseJson = await response.json()
        setMovie(responseJson.results)
        console.log(responseJson);
    }
    useEffect(()=>{
        getMovie()
    },[])
  return (
    <div className='Movies-section'>
       <h1 className='text-2xl my-[2rem]'>Latest Movies</h1>
   <div className="grid grid-cols-4 gap-4">
   {movie.map((item)=>{
        return(
            <div id='movie ' className='movie '>
           <div className="img-container relative overflow-hidden ">
           <img className=''  src={item.poster_path ? `${API_IMG}${item.poster_path} `: <p>No Image</p> } alt="" />
           <div className="movie-over  bg-white text-black absolute bottom-0 left-0 right-0  p-[15px]"id='movie-overview'>
            <h4>Overview:</h4>
            <p><small>{item.overview}</small></p>
            </div>
           </div>
            <div className="movie-info">
            <h3>{item.title}</h3>
            <div className="info flex justify-between">
                <div className='flex gap-3'>
                <p><small>{item.release_date.substr(0,4)}</small></p>
                <p><small>Ratings: {item.vote_average}</small></p>
                </div>
                <div>
                    <p>{item.original_language}</p>
                </div>
            </div>
            </div>
            </div>
        )
    })}
   </div>
    </div>
  )
}

export default Movies