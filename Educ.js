import  {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faAddressBook, faEnvelope, faGlobe, faInstagram } from '@fortawesome/free-solid-svg-icons';

  
const Educ = () => {

  const navigate = useNavigate();

  const toServices = () => {
    navigate("/Services");
  }

  const toProfile = () => {
    navigate("/Profile");
  }

  const toContact = () => {
    navigate("/Contact");
  }

  useEffect(() => {
    // Get the select element
    const dropdown = document.getElementById('numberDropdown');

    // Loop to generate options from 1 to 100
    for (let i = 1; i <= 100; i++) {
      // Create an option element
      const option = document.createElement('option');
      // Set the value and text content of the option
      option.value = i;
      option.textContent = i;
      // Append the option to the select element
      dropdown.appendChild(option);
    }
  }, []); 
  
  



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

      <div className='hacontent' onClick={toServices} > Book a Service </div> 
      <div className='hcontent'> Promos </div>
      <div className='hcontent'> About Us </div>
      <div className='hcontent' onClick={toServices} > Contact Us </div>
      <div className='hcontent'> FAQs </div>

      </div>

      <div className='hello'> 

      <div className='juan'> Hello, Juan!</div>
      <div onClick={toProfile}> 
      <FontAwesomeIcon icon={faUser} size="2x" color="black" /> 
      </div>
      
      </div>

      </div> 
      

      <div className="educdiv">
      <img className='educpic' src={process.env.PUBLIC_URL + '/educpic.png'} alt="whale" />
      </div>

      <div className='eductext'> Educational Tour </div>

      <div className='abcone'> 
      <div className='abctwo1'> 
        <div className='abctwo'>
        Booking an educational tour through a travel agency offers a seamless and enriching experience for students and educators alike. With expert guidance and tailored itineraries, travel agencies ensure that educational objectives are met while providing logistical support, such as transportation and accommodation. From cultural immersions to historical explorations, booking an educational tour through a travel agency guarantees a hassle-free and memorable learning adventure.
        </div>



        <div className='abctwo'> 
        In addition to taking care of transportation and accommodation, travel agencies often provide customized educational tour packages tailored to the specific interests and educational objectives of your group. Whether you're planning a school trip, university excursion, or educational retreat, a travel agency can help you design a comprehensive itinerary that combines learning opportunities with immersive cultural experiences. With access to a network of trusted partners and local guides, travel agencies can arrange exclusive visits to museums, research facilities, and educational institutions, offering unique insights and behind-the-scenes access to enrich your learning experience.
        </div>
        </div>

        <div className='abcthree'>  
        <div className='gentext'> General Information:  </div>

        <div className='nametext'> 
            Name:
        </div>
        <input className="nameinput" type="text"  />

        <div className='nametext'> 
            Email Address:
        </div>
        <input className="nameinput" type="email"  />

        <div className='nametext'> 
            Mobile Number:
        </div>
        <input className="nameinput" type="tel"  />

    </div>

      </div>

      <div className='secand3'> 

      <div className='second'> 
      <div className='sec1'>  
        <div className='gentext'> Travel Information:  </div>
 
        <div className='datediv'> 
        <div className='nametext2'> 
            Travel Date:
            <input className='dateinput' type="date" />
        </div>

        </div>

        <div className='nametext'> 
            School Pick Up Location:
        </div>
        <input className="destinput" type="text"  />

        <div className='nametext'> 
        Preffered Destination:
        </div>
        <input className="origininput" type="text"  />

        <div className='nametext'> 
             Number of Person:
             <select id='numberDropdown' className="dropdown"> </select>
        </div>
       

    </div>
      </div>

      <div className='third'>  
        <div className='gentext'> Remarks/Request:  </div>

        <input className="remarkinput" type="text"  placeholder='ex. We want to include Star City in our destination'/>

    </div>

    <div className='btndiv'> 
        <button className='btn'> Submit </button>
        <button className='btn'> Cancel </button>

    </div>

    </div>

      





    </div>



  );
};

export default Educ;
