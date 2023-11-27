//Imports

import Footer from './Footer';
import Home from './Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route,Outlet } from 'react-router-dom';
import Students from './Students';
import Teachers from './Teachers';
import Marks from './Marks';
import Contact from './Contact';
//import Attend from './'
import Attendencet from './AttendenceT'
import Attendence from './Attendence'
import More from './More'
import Shedules from './Shedules'
function App() {
  return (
    <>
    <div className="schoolname">
    <h1 className='text-3xl font-bold mt-3 underline' >St PETER'S MIDDLE SCHOOL</h1>
    <h5 className="m-3">Moolaikadu - 627113</h5></div>
    
   
    <Footer></Footer>
    
    <Routes>
    <Route exact path="/"  element={<Home/>} />  
    <Route exact path="/students"  element={<Students/>} />   
    <Route exact path="/teachers"  element={<Teachers/>} />    
    <Route exact path="/attendence"  element={<Attendence/>} />   
    <Route exact path="/teacherAttendence"  element={<Attendencet/>} />   
    <Route exact path="/marks"  element={<Marks/>} />   
    <Route exact path="/shedules"  element={<Shedules/>} />   
    <Route exact path="/contacts"  element={<Contact/>} />   
    <Route exact path="/more"  element={<More/>} />                                                                                                                                                                                                                                                                                                 
    </Routes>
  <Outlet/>
    </>
  );
}

export default App;