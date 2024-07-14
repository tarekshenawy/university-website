import React from 'react';
import "./Background.css";
import darkarrow from "../images/dark-arrow.png";


export default function Background() {
  return (
    <div className='background container'>
      <div className='content'>
        <h2>We Ensure better education for a better World</h2>
        <p>our-cutting edge curriclum is designed to empower students with the Knowledge,skills

experience needed to excel in the dynamic field of education</p>
<button>Explore more <img src={darkarrow} alt=''></img></button>

      </div>
       
    </div>
  )
}
