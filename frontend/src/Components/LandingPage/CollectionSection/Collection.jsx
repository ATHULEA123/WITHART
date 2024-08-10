import React from 'react'
import "./Collection.css"
import collectionbanner from "../../../assets/Collectionpageimage.png";
import { Link } from 'react-router-dom';
const Collection = () => {
  return (
    <div className='collection_section'>
        <h1>COLLECTIONS</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </p>
        <Link to= "/collection">
        <div className='image-container'>
            <img src={collectionbanner} alt='Collection banner' />
        </div>
        </Link>
    </div>
  )
}

export default Collection;
