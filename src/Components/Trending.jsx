import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
const Trending = () => {
    const [trend, setTrend] = useState([])
    const Url = `https://api.themoviedb.org/3/trending/all/week?api_key=f859b40fd1b7ffb7b279a4c41c3d0716`
    const API_IMG = `https://image.tmdb.org/t/p/w1280/`
    const getTrend = async ()=>{
        const response = await fetch(Url)
        const responseJson = await response.json()
        setTrend(responseJson.results)
    }
    useEffect(()=>{
        getTrend()
    },[])
  return (
    <div className=' Trending Section'>
       <h1 className='text-2xl my-[2rem]'>Trending</h1>
   <div className="grid grid-cols-4 gap-4">
   {trend.map((item)=>{
        return(
            <div>
            <img className=''  src={item.poster_path ? `${API_IMG}${item.poster_path} `: <p>No Image</p> } alt="" />
            <div className="movie-info">
            <h3 >{item.title ? `${item.title}`: `${item.name}`}</h3>
            {/* <p><small>{item.overview}</small></p> */}
            </div>
            </div>
        )
    })}
   </div>
    </div>
  )
}

export default Trending