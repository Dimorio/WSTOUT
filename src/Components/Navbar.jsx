import React, { useState } from 'react'
import {GrSearchAdvanced} from 'react-icons/gr'
import { Route, Routes } from 'react-router-dom'
import Movies from './Movies'
import Shows from './Shows'
import { NavLink } from 'react-router-dom'
import Trending from './Trending'
import FrontPage from './FrontPage'

const Navbar = () => {
    const style = {'marginRight': '1rem'}
    const [movie, setMovie] = useState([])
    const SEARCH_API = `https://api.themoviedb.org/3/search/movie/?api_key=f859b40fd1b7ffb7b279a4c41c3d0716&query=`
    const [input, setInput] = useState('')
    const handlerEvent = (e) =>{
        e.preventDefault()
        fetch(SEARCH_API + input)
        .then((res)=>res.json())
        .then((data)=>{
            setMovie(data.results)
            console.log(data.results);
        })
        
    }
    const handleChnage = (e)=>{
        setInput(e.target.value)
    }
  return (
    <div className='all bg-[#2A363B ]'>
    <div className="All-content relative">
    <nav className=" z-10 ">
        <nav className='max-w-[1400px] m-auto  px-[15px] flex justify-between py-[1rem]'>
        <div className="flex gap-[2rem] items-center">
            <NavLink to=''>
            <div className='logo-container'>
                <img src='https://westout.netlify.app/assets/images/logo.svg' alt="" />
            </div>
            </NavLink >
                <div className='nav-items'>
                    <NavLink to='/Movies' style={style}>
                <span>Movies</span>
                    </NavLink>
            <NavLink to='Shows' style={style}>
                <span>Shows</span>
                    </NavLink>
                    <NavLink to='Trending' >
                <span>Trending</span>
                    </NavLink>
                </div>
        </div>
        <div className="relative flex gap-[1.2rem]">
            <form onSubmit={handlerEvent}>
        <input type="text" placeholder='Search...' size={25} className='rounded-xl border-0 outline-none  py-[5px] px-[10px] placeholder:text-black text-black' onChange={handleChnage} value={input} />

            </form>
        <GrSearchAdvanced className='absolute top-[10px] left-[90%] cursor-pointer  '/>
        </div>
        </nav>
    </nav>
    <Routes>
        <Route path='' element={<FrontPage/>}/>
        <Route path='Movies' element={<Movies/>}/>
        <Route path='Shows' element={<Shows/>}/>
        <Route path='Trending' element={<Trending/>}/>
    </Routes>
    </div>
    
    </div>
  )
}

export default Navbar