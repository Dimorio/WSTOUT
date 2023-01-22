import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
const Shows = () => {
    const [show, setShow] = useState([])
    const Url = `https://api.themoviedb.org/3/discover/tv?api_key=f859b40fd1b7ffb7b279a4c41c3d0716`
    const API_IMG = `https://image.tmdb.org/t/p/w1280/`
    const getShow = async ()=>{
        const response = await fetch(Url)
        const responseJson = await response.json()
        setShow(responseJson.results)
    }
    useEffect(()=>{
        getShow()
    },[])
  return (
    <div className='Shows Section'>
       <h1 className='text-2xl my-[2rem]'>Shows</h1>
   <div className="grid grid-cols-4 gap-4">
   {show.map((item)=>{
        return(
            <div>
            <img className=''  src={item.poster_path ? `${API_IMG}${item.poster_path} `: <p>No Image</p> } alt="" />
            <div className="shows-info">
            <h3>{item.name}</h3>
            <div className="info">
                <p><small>{}</small></p>
            </div>
            {/* <p><small>{item.overview}</small></p> */}
            </div>
            </div>
        )
    })}
   </div>
    </div>
  )
}

export default Shows