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
  <Route path="/traveltayo/Contact" element={<Contact/>} />
  <Route path="/traveltayo/Educ" element={<Educ/>} />
  <Route path="/traveltayo/Vip" element={<Vip/>} />
  <Route path="/traveltayo/Services" element={<Services/>} />
  <Route path="/traveltayo/Profile" element={<Profile/>} />
</Routes>

     
     
       </BrowserRouter>

   
      

    </div>
    </>
  );
}

export default App;
