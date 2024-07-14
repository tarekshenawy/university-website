
import { useState,useRef,useEffect } from 'react';
import "./Navbar.css";
import logo from "../images/logo.png";
import menuicon from "../images/menu-icon.png";
import { Link } from 'react-scroll';

export default function Navbar() {
  const [state,setState] = useState(false)
  let time = useRef(true);
  useEffect(()=>{
    if(time.current){
    window.addEventListener("scroll",()=>{
      window.scrollY > 50 ? setState(true) : setState(false);

    })

    }
    time.current=false;

  },[])

  const[mobileicon,setMobileicon]=useState(false);
  function showmenu(){
    mobileicon ? setMobileicon(false) : setMobileicon(true);
  }



  return (
    <nav className={`container ${state ? "dark-nav" : ""}`}>
       <Link to='background' smooth={true} offset={0} duration={500}> <img src={logo} alt='' className='logo' ></img></Link>
        <ul className={`${mobileicon ? "" :"hide"}`}>
            <li><Link to='background' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='programs' smooth={true} offset={-220} duration={500}>Programs</Link></li>
            <li><Link to='about' smooth={true} offset={-100} duration={500}>About us</Link></li>
            <li><Link to='gallery' smooth={true} offset={-220} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-230} duration={500}>Testimonials</Link></li>
            <li className='btn'><Link to='contact' smooth={true} offset={-230} duration={500}>Contact us</Link></li>
        </ul>
        <img src={menuicon} alt='' className='menuicon' onClick={showmenu}></img>
    
        </nav>
  )
}
