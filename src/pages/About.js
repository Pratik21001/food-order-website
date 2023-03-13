import React from 'react'
import photo from '../assets/photo.jpeg';
import '../style/About.css';

function About() {
  return (
<div className="about">
    <div className="aboutTop" style={{backgroundImage:`url(${photo})`}}>
    </div>
    <div className="aboutBottom">
    <h1>About US</h1>
    <p>
        Hello Everyone This is a Demo UI Project of Indian
        Food Ordering website  in which we can view our favourite food 
        and in advanced we can use it as a full fledged website .
    </p>
    </div>
</div   >
    )
}

export default About;