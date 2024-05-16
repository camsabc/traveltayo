import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './Book.css';
import './Contact.css';
import './Educ.css';
import './Profile.css';
import Contact from './components/Contact';
import Educ from './components/Educ';
import Vip from './components/Vip';
import Services from './components/Services';
import Profile from './components/Profile';



function App() {
  return (
    <>
    <div className="App">

    <BrowserRouter>
         
         <Routes>
 
           <Route path="/Contact" element={<Contact/>}> </Route>
           <Route path="/Educ" element={<Educ/>}> </Route>
           <Route path="/Vip" element={<Vip/>}> </Route>
           <Route path="/Services" element={<Services/>}> </Route>
           <Route path="/Profile" element={<Profile/>}> </Route>
 
         </Routes>
     
     
       </BrowserRouter>

   
      

    </div>
    </>
  );
}

export default App;
