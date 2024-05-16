import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';





const Contact = (props) => {
  const navigate = useNavigate();


  const toServices = () => {
    navigate("/Services");
  }

  const toProfile = () => {
    navigate("/Profile");
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

      <div className='hcontent' onClick={toServices} > Book a Service </div> 
      <div className='hcontent'> Promos </div>
      <div className='hcontent'> About Us </div>
      <div className='hacontent'> Contact Us </div>
      <div className='hcontent'> FAQs </div>

      </div>

      <div className='hello'> 

      <div className='juan'> Hello, Juan!</div>
      <div className="profile" onClick={toProfile}>
      <FontAwesomeIcon icon={faUser} size="2x" color="black" /> 
      </div>

      
      </div>

      </div>

      <div className='fff'> CONTACT US  </div>


      <div className='ccon'> 

     
      <div className='c1'> 
      <div className="whatsapp-icon">
      <FontAwesomeIcon className="icon" icon={faPhone} size="2x" color="black" /> 
      </div>

      <div className="whatsapp-icon2">
      <FontAwesomeIcon className="icon2" icon={faAddressBook} size="2x" color="black" /> 
      </div>

      <div className="w1-">
      <img className='fb' src={process.env.PUBLIC_URL + '/email.png'} alt="whale" />
      </div>

      <div className="w1-">
      <img className='fb' src={process.env.PUBLIC_URL + '/web.png'} alt="whale" />
      </div>

      <div className="w1-">
      <img className='fb' src={process.env.PUBLIC_URL + '/fb.png'} alt="whale" />
      </div>

      <div className="w1-">
      <img className='ig' src={process.env.PUBLIC_URL + '/ig.png'} alt="whale" />
      </div>
      </div>



      <div className='c2'>
        <div className='t1'> GLOBE  0915-262-3898 </div>
        <div className='t2'> GLOBE  0927-893-0271 </div>
        <div className='t3'> DITO   0994-639-6953 </div>

        <div className='t4'> info@traveltayoph.com </div>

        <div className='t5'> www.traveltayocorp.ph </div>

        <div className='t6'> Travel Tayo Car Rental and Tours </div>

        <div className='t7'> Travel Tayo PH </div>


      </div>

      <div className='mapdiv' > {/* Apply container styles */}
      <Map
  className="mapdivs"
  google={props.google}
  zoom={18}
  initialCenter={{ lat: 14.288641, lng: 121.112646 }}
  style={{ width: '500px', height: '300px' }} // Adjust width and height as needed
>

        <Marker
          position={{ lat: 14.288641, lng: 121.112646 }}
        />
      </Map>
    </div>

      
      </div>




    </div>



  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBvFquElmAF3HMcFii5F0OEvetYyMBo-3Y' // Replace with your actual API key
})(Contact);