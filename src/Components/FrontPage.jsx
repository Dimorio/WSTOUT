import React from 'react'
import Action from './Action'
import Movies from './Movies'
import Shows from './Shows'
import Trending from './Trending'

const FrontPage = () => {
  return (
    <div className='absolute z-[-10] top-[0] left-0 bottom-0 right-0'>
<Action/>
    <div className='max-w-[1400px] m-auto px-[15px]'>
        <Movies/>
        <Shows/>
    </div>
    </div>
  )
}

export default FrontPage