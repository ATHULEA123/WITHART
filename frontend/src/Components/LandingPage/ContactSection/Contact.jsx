import React from 'react'
import "./Contact.css"
const Contact = () => {
  return (
    <div className='contactsection'>
    <h1>CONTACTS</h1>
        <div className='contactinput'>
            <input type='text' placeholder='Enter your Name' />
            <input type='email' placeholder='Enter Your Email' />
            <textarea name="postContent" placeholder='Enter Message' />

        </div>
        <button className='contact_submit'>Submit</button>
    </div>
  )
}

export default Contact