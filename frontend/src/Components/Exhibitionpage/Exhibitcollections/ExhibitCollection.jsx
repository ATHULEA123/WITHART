import React from 'react'
import "./ExhibitCollection.css";
import work from "../../../assets/exhibitionwork.png"
import work1 from "../../../assets/Collectionpageimage.png"
const ExhibitCollection = () => {
  return (
    <div className='exhibitions'>
    <div className='exhibitionwork'>
    <img src={work} alt='work' className='exhibitimage'  />
        <h3>Eye Work</h3>
        <h4>FortKochi || Darbarhall</h4>
            <div className='btn'>
            <button className='showmorebtn'>Show More</button>
       
            </div>
           
       
    </div>

    <div className='exhibitionwork'>
    <img src={work1} alt='work'  />
        <h3>Eye Work</h3>
        <h4>FortKochi || Darbarhall</h4>
    </div>

    <div className='exhibitionwork'>
    <img src={work} alt='work'  />
        <h3>Eye Work</h3>
        <h4>FortKochi || Darbarhall</h4>
    </div>


    </div>
  )
}

export default ExhibitCollection