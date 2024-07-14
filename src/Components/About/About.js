import React from 'react';
import "./About.css";
import about from "../images/about.png";
import playicon from "../images/play-icon.png";


export default function About() {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about} alt='' className='aboutimage'></img>
           
            <img src={playicon} alt='' className='playicon'></img>
        </div>
        <div className='about-right'>
            <h3>About University</h3>
            <h2>Nurturing Tomorrow
            leaders Today</h2>
            <p>EducationCity specialises in primary
                 teaching resources with curriculum-mapped 
                 content for students aged 3-12. Teachers 
                 can beneﬁt from rigorous assessments with 
                 measurable outcomes to support students’ growth 
                 and development. We provide time-saving tools and 
                 adaptive, personalised content based on students’ needs.</p>
        </div>
    </div>
  )
}
