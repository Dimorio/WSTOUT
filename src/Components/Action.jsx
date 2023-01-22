import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
const Action = () => {
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
    <Splide
      options={{
        type: "loop",
        gap: "10px",
        drag: "free",
        arrows: false,
        pagination: true,
        perPage: 3,
        autoScroll: {
          pauseOnHover: false,
          pauseOnFocus: false,
          rewind: false,
          speed: 1,
          autoStart:true,
        }
      }}
      extensions={{ AutoScroll }}
      >
        {trend.map((item)=>{
             return(
                 <SplideSlide>
                 <img className=''  src={item.poster_path ? `${API_IMG}${item.poster_path} `: <p>No Image</p> } alt="" />
                 </SplideSlide>
             )
         })}
    </Splide>
  )
}

export default Action