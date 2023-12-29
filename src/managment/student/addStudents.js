 
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useMutation,queryClient } from 'react-query';
import { createStudent } from '../../api';
 import { useNavigate } from 'react-router-dom';
//import 'react-toastify/dist/ReactToastify.css';
 const AddStudents = () => {
const navigate =useNavigate()
  const mutation = useMutation(createStudent, {
    onSuccess: () => {
      queryClient.invalidateQueries('photos');
      console.log('Student created successfully');
      navigate('/photos');
    },
    onError: (error) => {
      console.error('Error creating image:', error.respose.data);
    },
  });

  const [studentData, setStudentData] = useState({
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
    mutation.mutate(studentData);
   // console.log(studentData,(typeof(studentData.imageUrl.name)),(typeof(studentData.imageUrl)),"photooo");
  };

  const handleClose = () => {
    setStudentData({
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
    setStudentData((prevData) => ({
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
        value={studentData.name}
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
        value={studentData.rollNo}
        onChange={handleChange}
      />
    </div>
    <div className="form-group">
      <label htmlFor="age">Age:</label>
      <input
        className="form-control"
        id="age"
        name="age"
        value={studentData.age}
        onChange={handleChange}
      />
    </div>
    <div className="form-group">
      <label htmlFor="gender">gender:</label>
      <input
        className="form-control"
        id="gender"
        name="gender"
        value={studentData.gender}
        onChange={handleChange}
      />
    </div>
    <div className="form-group">
      <label htmlFor="street">street:</label>
      <input
        className="form-control"
        id="street"
        name="address.street"
        value={studentData.address.street}
        onChange={handleChange}
      />
    </div>
    <div className="form-group">
      <label htmlFor="state">state:</label>
      <input
        className="form-control"
        id="state"
        name="address.state"
        value={studentData.address.state}
        onChange={handleChange}
      />
    </div>
    <div className="form-group">
      <label htmlFor="city">city:</label>
      <input
        className="form-control"
        id="city"
        name="address.city"
        value={studentData.address.city}
        onChange={handleChange}
      />
    </div>
    <div className="form-group">
      <label htmlFor="zip_code">zip_code:</label>
      <input
        className="form-control"
        id="zip_code"
        name="address.zip_code"
        value={studentData.address.zip_code}
        onChange={handleChange}
      />
    </div>
    <Button type="submit" variant="primary">
      Create Student 
    </Button>
 <Button onClick={handleClose}> close</Button>
</form></>
  )
}
 export default AddStudents