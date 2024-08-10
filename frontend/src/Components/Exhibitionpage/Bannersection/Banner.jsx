import React from 'react'
import banner from "../../../assets/collectionpagebanner.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faList} from "@fortawesome/free-solid-svg-icons";
import "./Bsnner.css"

const Banner = () => {
  return (
    <div className='collectionbanner'>
    <img  src={banner} className='' alt=''/>
    <div className='banner-text'>
        <h1>WITH ART</h1>
        <h6><a href="/">Home</a> &gt; Exhibition</h6>
      </div>
      <div className='nextsection'>
        <div>
            <h4><FontAwesomeIcon icon={faList} />Filter</h4>
        </div>
        <div>
            <h4>Total</h4>
            

        </div>

      </div>


    </div>
  )
}

export default Banner