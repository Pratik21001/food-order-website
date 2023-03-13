import React from 'react'
import '../style/Contact.css';
import fooda from '../assets/fooda.jpeg'

function Contact() {
  return (
  <div className="contact">
    <div className="leftSide"style={{backgroundImage:`url(${fooda})`}} >
    </div>
    <div className="rightSide">
      <h1>Contact US</h1>
      <form id ="contact-form" method="POST">
        <label htmlFor="name">FUll Name</label>
       <input name="name" type="text" placeholder="Enter Your Name"></input>
        <label htmlFor="email">Email Address</label>
        <input name="email" placeholder="Enter Your Email Address" type="email"></input>
        <label htmlFor="message">Message </label>
         <textarea name="message" rows="7" placeholder="Enter your Message"></textarea>
        <button type="submit" >Send Message</button>
      </form>
    </div>
    </div>
  )
}

export default Contact