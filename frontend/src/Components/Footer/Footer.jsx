import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
    <div className='first'>
    <h3>WITH ART</h3>

    <h4>Thrissur,Kerala</h4>

    </div>
    <div className='second'>
        <h3>Link</h3>
        <h5><a href='#'>Home</a></h5>
        <h5><a href='#'>Shop</a></h5>
        <h5><a href='#'>About</a></h5>
        <h5><a href='#'>Contact</a></h5>
    </div>
    <div className='third'>
        <h3>Help</h3>
        <h5><a href='#'>Payment Optiont</a></h5>
        <h5><a href='#'>Privacy Policy</a></h5>
        
        
    </div>
    <div className='fourth'>
        <input type='text' placeholder='Newsletter' />
        <button>Subscribe</button>
    </div>

    </div>
  )
}

export default Footer