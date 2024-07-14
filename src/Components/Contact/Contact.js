
import './Contact.css';
import messageicon from "../images/msg-icon.png";
import mailicon from "../images/mail-icon.png";
import phoneicon from "../images/phone-icon.png";

export default function Contact() {

  return (
    <div className='contact'>
        <div className='col1'>
            <h2>Send Us a message  <img src={messageicon} alt=''></img></h2>
          
            <p>Feel free to reach out through 
                contact from or find our contact 
                information below .your feedback .questions 
                and suggestion are important to us
                 as we strive to 
                provide exeptional service to our university community.</p>
                <div className='contactinfo'>
                <p><img src={mailicon} alt=''></img>contact @gmail.com</p>
                <p><img src={phoneicon} alt=''></img>05022222224455</p>

                </div>
               

        </div>
        <div className='col2'>
            <form>
                <label>Name</label>
                <input type='text' placeholder='Enter name'></input>
                <label>Phone Number</label>
                <input type='text' placeholder='Enter Number'></input>
                <label>Write your message here</label>
                <textarea rows={6} placeholder='Enter your message'></textarea>
                <button>Submit now</button>
            </form>

        </div>
    </div>
  )
}
