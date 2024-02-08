//Imports

//import Footer from './Footer';
import Home from './Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route,Outlet } from 'react-router-dom';
import Students from './Students';
//import Teachers from './Teachers';
import Marks from './Marks';
import MarksDetails from "./teachersLogin/marks"
import Contact from './Contact';
import TeacherDetails from './managment/teacher/teachersDetails';
//import Contact from './managment/admin/contacts';
import StudentDetails from './teachersLogin/studentDetails';
//import Attend from './'
import Attendencet from './managment/student/AttendenceT'
import Attendence from './teachersLogin/Attendence'
import More from './More'
import Shedules from './Shedules'
import AddStudents from './managment/student/addStudents';
import SubjectDetails from './subject';
import AddTeachers from './managment/teacher/addTeachers';
//import MarksDetails from './teachersLogin/marks';
function App() {
  return (
    <>
    <div className="schoolname .bg-warning.bg-gradient">
    <h1 className='.bg-warning.bg-gradient' >St PETER'S MIDDLE SCHOOL</h1>
    <h5 className="m-3">Moolaikadu - 627113</h5></div>
    
   

    
    <Routes>
    <Route exact path="/"  element={<Home/>} />  
    <Route exact path="/students"  element={<Students/>} />  
    <Route exact path="students/edit/:id"  element={<editStudents/>} />  
    <Route exact path="/teachers"  element={<TeacherDetails/>} />    
    <Route exact path="/attendence"  element={<Attendence/>} />   
    <Route exact path="/teacherAttendence"  element={<Attendencet/>} />   
    <Route exact path="/mark"  element={<MarksDetails/>} />   
    <Route exact path="/shedules"  element={<Shedules/>} />   
    <Route exact path="/createStudent"  element={<AddStudents/>} />  
    <Route exact path="/createTeacher"  element={<AddTeachers/>} />  

    <Route exact path="/more"  element={<More/>} />      
    <Route exact path="/marks"  element={<Marks/>} />   
    <Route exact path="/more"  element={<More/>} />   
    <Route exact path="/subjects"  element={<SubjectDetails/>} />      
    <Route exact path="/as"  element={<StudentDetails/>} />    
    <Route exact path="/contactus"  element={<Contact/>} />                                                                                                                                                                                                                                                                                         
    </Routes>
  <Outlet/>
    </>
  );
}

export default App;
