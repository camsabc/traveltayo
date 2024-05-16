import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const navigate = useNavigate();

  const toEduc = () => {
    navigate("/Educ");
  }

  const toVip = () => {
    navigate("/Vip");
  }

  const toContact = () => {
    navigate("/Contact");
  }

  const toProfile = () => {
    navigate("/Profile");
  }

  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.async = true;
  //   script.src = "https://cse.google.com/cse.js?cx=11e339c9b70904a8b";
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);
  



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

      <div className='hacontent'> Book a Service </div> 
      <div className='hcontent'> Promos </div>
      <div className='hcontent'> About Us </div>
      <div className='hcontent' onClick={toContact} > Contact Us </div>
      <div className='hcontent'> FAQs </div>

      </div>

      <div className='hello'> 

      <div className='juan'> Hello, Juan!</div>
      <div onClick={toProfile} > 
      <FontAwesomeIcon icon={faUser} size="2x" color="black" /> 
      </div>
      
      </div>

      </div>
{/* 
      <script async src="https://cse.google.com/cse.js?cx=11e339c9b70904a8b"></script>
      <div className="gcse-search"></div> */}

      <div className='services'> Services Offered </div>

      <div className='r'>
      <div className='yellow'>

      <div className='ys1'> Tour Packages </div>
      <div className='ys2'> Passport Assistance </div>
      <div className='ys3'> Hotel Booking </div>
      <div className='ys4'> Business Trip </div>

      </div>

      <div className='row'>  

      <div className='rows'> <img className='ss' src={process.env.PUBLIC_URL + '/s1.png'} alt="whale" /> </div>
      <div className='rows'> <img className='ss' src={process.env.PUBLIC_URL + '/s2.png'} alt="whale" /> </div>
      <div className='rows'> <img className='ss' src={process.env.PUBLIC_URL + '/s3.png'} alt="whale" /> </div>
      <div className='rows'> <img className='ss' src={process.env.PUBLIC_URL + '/s4.png'} alt="whale" /> </div>

      </div>
      </div>

      <div className='r2'>
      <div className='yellow'>

      <div className='ys1'> Visa Processing </div>
      <div className='ys2'> Car Rental </div>
      <div className='ys3' onClick={toVip} > VIP Escort </div>
      <div className='ys4' onClick={toEduc} > Educational Tour </div>

      </div>

      <div className='row'>  

      <div className='row1'> <img className='visa' src={process.env.PUBLIC_URL + '/visa.png'} alt="whale" /> </div>
      <div className='row1'> <img className='visa' src={process.env.PUBLIC_URL + '/car.png'} alt="whale" /> </div>
      <div className='row1'> <img className='visa' src={process.env.PUBLIC_URL + '/vip.png'} alt="whale" /> </div>
      <div className='row1'> <img className='visa' src={process.env.PUBLIC_URL + '/educ.png'} alt="whale" /> </div>

      </div>
      </div>








      
    </div>



  );
};

export default Services;
