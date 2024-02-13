 
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useMutation,queryClient } from 'react-query';
import { updateTeachers } from '../../api';
 import { useNavigate } from 'react-router-dom';
//import 'react-toastify/dist/ReactToastify.css';
 const updateTeachers = () => {
const navigate =useNavigate()
  const mutation = useMutation(updateTeachers, {
    onSuccess: () => {
      queryClient.invalidateQueries('photos');
      console.log('Teacher editd successfully');
      navigate('/photos');
    },
    onError: (error) => {
      console.error('Error creating image:', error.respose.data);
    },
  });

  const [teacherData, setteacherData] = useState({
   rollNo:'',
    name: '',
    age:  '',
  gender: '',
  address:  "",
  role:"",phone:"",
  email:""
  });

  const handleedit = async (e) => {
    e.preventDefault();
    console.log(   e.preventDefault());
    mutation.mutate(teacherData);
   // console.log(teacherData,(typeof(teacherData.imageUrl.name)),(typeof(teacherData.imageUrl)),"photooo");
  };

  const handleClose = () => {
    setteacherData({
      rollNo:'',
      name: '',
      age:  '',
    gender: '',
   phone:"",
    address: "",role:"",
    email:"",
       
    });
     
    navigate('/teachers');
  };
  const handleChange = (e) => {
    console.log   ((e.target.name),((e.target.value)))
const { name, value} = e.target;
   // console.log((e.target),"name:",name,"value:",value,files); 
    setteacherData((prevData) => ({
      ...prevData,
      [name]: value,
    }  
    ));
  };
  return (
  <><form onSubmit={handleedit}>
  
    <div className="form-group">
      <label htmlFor="name ">Name:</label>
      <input
        type="text" 
        className="form-control"
        id="name"
        name="name"
        value={teacherData.name}
        onChange={handleChange}
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="rollno">RollNo:</label>
      <input
        className="form-control"
        id="rollno"
        name="rollNo"
        value={teacherData.rollNo}
        onChange={handleChange}
      />
    </div>
    <div className="form-group">
      <label htmlFor="age">Age:</label>
      <input
        className="form-control"
        id="age"
        name="age"
        value={teacherData.age}
        onChange={handleChange}
      />
    </div>
    <div className="form-group">
      <label htmlFor="gender">gender:</label>
      <input
        className="form-control"
        id="gender"
        name="gender"
        value={teacherData.gender}
        onChange={handleChange}
      />
    </div>
    <div className="form-group">
      <label htmlFor="phone">Phone:</label>
      <input
        className="form-control"
        id="phone"
        name="phone"
        value={teacherData.phone}
        onChange={handleChange}
      />
    </div>
    <div className="form-group">
      <label htmlFor="email">Email:</label>
      <input
        className="form-control"
        id="email"
        name="email"
        value={teacherData.email}
        onChange={handleChange}
      />
    </div>
    <div className="form-group">
      <label htmlFor="role">Role:</label>
      <input
        className="form-control"
        id="role"
        name="role"
        value={teacherData.role}
        onChange={handleChange}
      />
    </div>
    <div className="form-group">
      <label htmlFor="address">Address:</label>
      <textarea 
      type='texrarea'
        className="form-control"
        id="address"
        name="address"
        value={teacherData.address}
        onChange={handleChange}
      />
    </div>
    <Button type="submit" variant="warning mx-3 my-5 ">
      Edit Teacher 
    </Button>
 <Button variant="warning mx-3 my-5 "  onClick={handleClose}> close</Button>
</form></>
  )
}
 export default updateTeachers