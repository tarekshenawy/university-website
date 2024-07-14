import React from 'react';
import "./Programs.css";
import program1 from "../images/program-1.png";
import program2 from "../images/program-2.png";
import program3 from "../images/program-3.png";
import programicon1 from "../images/program-icon-1.png";
import programicon2 from "../images/program-icon-2.png";
import programicon3 from "../images/program-icon-3.png";

export default function Programs() {
  return (
    <div className='programs'>
      
            <div className='card1'>
                <img src={program1} alt=''></img>
                
                <div className='icon'>
                <img src={programicon1} alt='' ></img>
                <p>Graduation degree</p>

            </div>
          

            </div>

            <div className='card1'>
            <img src={program2} alt=''></img>
                  <div className='icon'>
                    <img src={programicon2} alt='' ></img>
                    <p>Master degree</p>

                  </div>
          

            </div>
            <div className='card1'>
              
            <img src={program3} alt=''></img>
                <div className='icon'>
                    <img src={programicon3} alt='' ></img>
                    <p>Post degree</p>


                </div>
              
            </div>
           
        
      
    </div>
  )
}
