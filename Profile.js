import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

  
const Profile = () => {
  const navigate = useNavigate();

  const toServices = () => {
    navigate("/Services");
  }

  const toContact = () => {
    navigate("/Contact");
  }

  const [isPastClicked, setIsPastClicked] = useState(false);

  const handlePastClick = () => {
    setIsPastClicked(true);
  }

  const handleUpcomingClick = () => {
    setIsPastClicked(false);
  }



  return (
    
    <div className="container">

      <div className ="white"> 

      <div className='logo'>
        <div className='ll'>
        <img className='l' src={process.env.PUBLIC_URL + '/logo.png'} alt="whale" />
        </div>

        <div>
        <img className='lt' src={process.env.PUBLIC_URL + '/logo text.png'} alt="whale" />
        </div>
      </div>

      <div className='header'> 

      <div className='hccontent' onClick={toServices}> Book a Service </div> 
      <div className='hcontent'> Promos </div>
      <div className='hcontent'> About Us </div>
      <div className='hcontent' onClick={toContact} >  Contact Us </div>
      <div className='hcontent'> FAQs </div>

      </div>

      <div className='hello'> 

      <div className='juan'> Hello, Juan!</div>
      <div > 
      <FontAwesomeIcon icon={faUser} size="2x" color="black" /> 
      </div>
      
      </div>

      </div>

  
     <div className='two'> 

     <div className='left'> 

     <div className='pr'> Profile </div>

     <div className='picd'>
     <img className='ab' src={process.env.PUBLIC_URL + '/prpic.png'} alt="whale" />
     </div>

     <div className='abc'> Juan Dela Cruz </div>
     <div className='abca'> juan@gmail.com </div>

     <div className='bottom'> 
        <div className='epc'> <button className='ep'> Edit Profile </button> </div>
     </div>

     <div className='bottom'> 
        <div className='epc'> <button className='ep'> Delete Profile </button> </div>
     </div>

     <div className='bottom'> 
        <div className='epc'> <button className='ep'> Log Out </button> </div>
     </div>


        
     </div>
     

     <div className='right'> 

     <div className='rc'> TRANSACTIONS 



     <div className='bts'> 
        <div className='upd'> 
        <button
              className={isPastClicked ? 'updbta clicked' : 'updbta'}
              onClick={handleUpcomingClick}
            >
              UPCOMING
            </button>
          </div>
          <div className="upd">
            <button
              className={isPastClicked ? 'updbt' : 'updbt clicked'}
              onClick={handlePastClick}
            >
              PAST
            </button>
        </div>
    </div>




    {isPastClicked ? (
      //PAST BUTTON CONTENT

      <> 
          <div className='f2'> 
            <p className='ff'> Booking #123 - Vehicle Rental </p>
            <div className='ff'> Date: January 5, 2020  </div> 
            <div className='ff'> Time of Pickup: 6 AM </div>
            <div className='mdbtn'> <button className='mdmd'> More Details </button> </div>
          </div>

          <div className='f2'> 
            <p className='ff'> Booking #124 - Vehicle Rental </p>
            <div className='ff'> Date: February 5, 2020  </div> 
            <div className='ff'> Time of Pickup: 6 AM </div>
            <div className='mdbtn'> <button className='mdmd'> More Details </button> </div>
          </div>

          <div className='f2'> 
            <p className='ff'> Booking #125 - Vehicle Rental </p>
            <div className='ff'> Date: March 5, 2020  </div> 
            <div className='ff'> Time of Pickup: 6 AM </div>
            <div className='mdbtn'> <button className='mdmd'> More Details </button> </div>
          </div>

          <div className='f2'> 
            <p className='ff'> Booking #124 - Vehicle Rental </p>
            <div className='ff'> Date: February 5, 2020  </div> 
            <div className='ff'> Time of Pickup: 6 AM </div>
            <div className='mdbtn'> <button className='mdmd'> More Details </button> </div>
          </div>

          <div className='f2'> 
            <p className='ff'> Booking #125 - Vehicle Rental </p>
            <div className='ff'> Date: March 5, 2020  </div> 
            <div className='ff'> Time of Pickup: 6 AM </div>
            <div className='mdbtn'> <button className='mdmd'> More Details </button> </div>
          </div>

          </>
        ) : (

          //UPCOMING BUTTON CONTENT

          <>
          <div className='f1'> 
            <p className='ff'> Booking #221 - Vehicle Rental </p>
            <div className='ff'> Date: January 5, 2025  </div> 
            <div className='ff'> Time of Pickup: 6 AM </div>
            <div className='mdbtn'> <button className='mdmd'> More Details </button> </div>
          </div>

          <div className='f1'> 
            <p className='ff'> Booking #222 - Vehicle Rental </p>
            <div className='ff'> Date: February 5, 2025 </div> 
            <div className='ff'> Time of Pickup: 6 AM </div>
            <div className='mdbtn'> <button className='mdmd'> More Details </button> </div>
          </div>

          <div className='f1'> 
            <p className='ff'> Booking #226 - Vehicle Rental </p>
            <div className='ff'> Date: March 5, 2025 </div> 
            <div className='ff'> Time of Pickup: 6 AM </div>
            <div className='mdbtn'> <button className='mdmd'> More Details </button> </div>
          </div>

          <div className='f1'> 
            <p className='ff'> Booking #222 - Vehicle Rental </p>
            <div className='ff'> Date: February 5, 2025 </div> 
            <div className='ff'> Time of Pickup: 6 AM </div>
            <div className='mdbtn'> <button className='mdmd'> More Details </button> </div>
          </div>

          <div className='f1'> 
            <p className='ff'> Booking #226 - Vehicle Rental </p>
            <div className='ff'> Date: March 5, 2025 </div> 
            <div className='ff'> Time of Pickup: 6 AM </div>
            <div className='mdbtn'> <button className='mdmd'> More Details </button> </div>
          </div>
          

          
          </>
        )}

     


 
     
     
     </div> 

     </div>
     


     </div>
    </div>



  );
};

export default Profile;
