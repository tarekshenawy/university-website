import React, { useRef } from 'react';
import "./Testimonials.css";
import user1 from "../images/user-1.png";
import user2 from "../images/user-2.png";
import user3 from "../images/user-3.png";
import user4 from "../images/user-4.png";
import nexticon from "../images/next-icon.png";
import backicon from "../images/back-icon.png";

export default function Testimonials() {
    let inputref =useRef();
    let x = 0;
    function slideforward(){
        if(x > -50){
            x -=25;
        }
        inputref.current.style.transform = `translateX(${x}%)`;

    }
    function backforward(){
        if(x < 0){
            x +=25;
        }
        inputref.current.style.transform = `translateX(${x}%)`;

    }
  return (
    <div className='testimonials'>

      
            <img src={nexticon} alt='' className='nexticon' onClick={slideforward}></img>
            <img src={backicon} alt='' className='backicon' onClick={backforward}></img>
      

<div className='slider' >
    <ul ref={inputref}>
        <li>
        <div className='slide'>
                        <div className='userinfo'>
                            <img src={user1} alt=''></img>
                            <p>William Jackson</p>
                        </div>
                        <div className='text'>
                            <p>Technology will continue to feature 
                                articles and special issues devoted 
                                to professional and academic writing and 
                                research, software and book reviews, literary
                                and linguistic analyses of texts,
                                electronic publishing and issues related to
                                the Internet.</p>
                        </div>
                </div>

        </li>
        <li>
        <div className='slide'>

<div className='userinfo'>
            <img src={user2} alt=''></img>
            <p>William Jackson</p>
        </div>
        <div className='text'>
            <p>Technology will continue to feature 
                articles and special issues devoted 
                to professional and academic writing and 
                research, software and book reviews, literary
                and linguistic analyses of texts,
                electronic publishing and issues related to
                the Internet.</p>
        </div>
</div>

        </li>
        <li>
        <div className='slide'>
            <div className='userinfo'>
                <img src={user3} alt=''></img>
                <p>William Jackson</p>
            </div>
            <div className='text'>
                <p>Technology will continue to feature 
                    articles and special issues devoted 
                    to professional and academic writing and 
                    research, software and book reviews, literary
                    and linguistic analyses of texts,
                    electronic publishing and issues related to
                    the Internet.</p>
            </div>
    </div>

        </li>
        <li>
        <div className='slide'>
                <div className='userinfo'>
                    <img src={user4} alt=''></img>
                    <p>William Jackson</p>
                </div>
                <div className='text'>
                    <p>Technology will continue to feature 
                        articles and special issues devoted 
                        to professional and academic writing and 
                        research, software and book reviews, literary
                        and linguistic analyses of texts,
                        electronic publishing and issues related to
                        the Internet.</p>
                </div>
    </div>



        </li>
    </ul>

  

   

  

   










    </div>
   

    </div>
    

    
        

    
    
  )
}
