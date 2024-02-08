 
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useMutation,queryClient } from 'react-query';
import { createTeachers } from '../../api';
 import { useNavigate } from 'react-router-dom';
//import 'react-toastify/dist/ReactToastify.css';
 const AddTeachers = () => {
const navigate =useNavigate()
  const mutation = useMutation(createTeachers, {
    onSuccess: () => {
      queryClient.invalidateQueries('photos');
      console.log('Teacher created successfully');
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
  address: {
    street: '',
    city:  '',
    state:  '',
    zip_code:  ''
  }
  });

  const handleCreate = async (e) => {
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
   
    address: {
      street: '',
      city:  '',
      state:  '',
      zip_code:  ''
    } 
       
    });
     
    navigate('/');
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
  <><form onSubmit={handleCreate}>
  
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
      <label htmlFor="street">street:</label>
      <input
        className="form-control"
        id="street"
        name="address.street"
        value={teacherData.address.street}
        onChange={handleChange}
      />
    </div>
    <div className="form-group">
      <label htmlFor="state">state:</label>
      <input
        className="form-control"
        id="state"
        name="address.state"
        value={teacherData.address.state}
        onChange={handleChange}
      />
    </div>
    <div className="form-group">
      <label htmlFor="city">city:</label>
      <input
        className="form-control"
        id="city"
        name="address.city"
        value={teacherData.address.city}
        onChange={handleChange}
      />
    </div>
    <div className="form-group">
      <label htmlFor="zip_code">zip_code:</label>
      <input
        className="form-control"
        id="zip_code"
        name="address.zip_code"
        value={teacherData.address.zip_code}
        onChange={handleChange}
      />
    </div>
    <Button type="submit" variant="primary">
      Create Teacher 
    </Button>
 <Button onClick={handleClose}> close</Button>
</form></>
  )
}
 export default AddTeachers