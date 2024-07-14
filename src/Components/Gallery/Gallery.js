import React from 'react';
import "./Gallery.css";
import gallery1 from "../images/gallery-1.png";
import gallery2 from "../images/gallery-2.png";
import gallery3 from "../images/gallery-3.png";
import gallery4 from "../images/gallery-4.png";

export default function Gallery() {
  return (
 
    <div className='gallery'>
        <div className='images'>
        <img src={gallery1} alt=''></img>
        <img src={gallery2} alt=''></img>
        <img src={gallery3} alt=''></img>
        <img src={gallery4} alt=''></img>
        </div>
        <button >Show more</button>
     
    </div>
   
  )
}
