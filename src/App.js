/* eslint-disable react/jsx-no-undef */
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
import SubjectDetails from './pages/subject/subject';
import EditStudents from './managment/student/editStudents';
import AddTeachers from './managment/teacher/addTeachers';
import EditTeachers from './managment/teacher/EditTeachers';
//import MarksDetails from './teachersLogin/marks';
import CreateMarks from './teachersLogin/CreateMarks'
import CreateSubject from './pages/subject/CreateSubjects';
import ClassDetails from './pages/class/ClassDetails';
import CreateClass from './pages/class/CreateClass'
import UpdateClass from './pages/class/UpdateClass';
import UpdateSubject from './pages/subject/UpdateSubjects';
import TimetableDetails from './pages/timetable/TimetableDetails';
function App() {
  return (
    <>
    <div className="schoolname .bg-warning.bg-gradient">
    <h1 className='.bg-warning.bg-gradient' >St PETER'S MIDDLE SCHOOL</h1>
    <h5 className="m-3">Moolaikadu - 627113</h5></div>
    
   

    
    <Routes>
    <Route exact path="/"  element={<Home/>} />  
    <Route exact path="/students"  element={<Students/>} />  
    <Route exact path="students/edit/:id"  element={<EditStudents/>} />  
    <Route exact path="/createStudent"  element={<AddStudents/>} />  

    <Route exact path="teachers/edit/:id"  element={<EditTeachers/>} />  
    <Route exact path="/teachers"  element={<TeacherDetails/>} />  
    <Route exact path="/createTeacher"  element={<AddTeachers/>} />  

    <Route exact path="/marks/:id/addMarks"  element={<CreateMarks/>} />   
    <Route exact path="/mark"  element={<MarksDetails/>} />   
    <Route exact path="/marks/:id"  element={<Marks/>} />   
{/* //class */}
    <Route exact path="/subjects"  element={<SubjectDetails/>} />      
    <Route exact path="/subjects/create"  element={<CreateSubject/>} />      
    <Route exact path="/subject/edit/:id"  element={<UpdateSubject/>} />   

    <Route exact path="/createClass"  element={<CreateClass/>} />      
    <Route exact path="/class"  element={<ClassDetails/>} /> 
    <Route exact path="/updateClass/:id"  element={<UpdateClass/>} /> 

    <Route exact path="/teacherAttendence"  element={<Attendencet/>} />   
    <Route exact path="/shedules"  element={<Shedules/>} />   

    <Route exact path="/timetable"  element={<TimetableDetails/>} />   

    <Route exact path="/more"  element={<More/>} />      
    <Route exact path="/more"  element={<More/>} />   
    <Route exact path="/attendence"  element={<Attendence/>} />   

    <Route exact path="/as"  element={<StudentDetails/>} />    
    <Route exact path="/contactus"  element={<Contact/>} />                                                                                                                                                                                                                                                                                         
    </Routes>
  <Outlet/>
    </>
  );
}

export default App;
