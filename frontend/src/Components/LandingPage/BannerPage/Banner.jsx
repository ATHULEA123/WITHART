import React from 'react';
import "./Banner.css"
import  bannerimage  from "../../../assets/bannerimage.png";
const Banner = () => {
  return (
    <div className='banner'>
    <img src={bannerimage} className='bannerimages' alt='' />
    <div className='txt'>
    <h1 className='zoom'>WITH ART</h1>
    </div>
    <h2 className='bannerquote'>A new Space for Art</h2>


    </div>
  )
}

export default Banner