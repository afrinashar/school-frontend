import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { useMutation, queryClient } from 'react-query';
import { createStudent } from '../../api';
import { useNavigate } from 'react-router-dom';

const AddStudents = () => {
  const navigate = useNavigate();
  
  const mutation = useMutation(createStudent, {
    onSuccess: () => {
      queryClient.invalidateQueries('students');
      console.log('Student created successfully');
      navigate('/students');
    },
    onError: (error) => {
      console.error('Error creating student:', error.response.data);
    },
  });

  const [studentData, setStudentData] = useState({
    rollNumber: '',
    name: '',
    age: '',
    gender: '',
    address: {
      street: '',
      city: '',
      state: '',
      zip_code: '',
    },
  });

  const handleCreate = (e) => {
    e.preventDefault();
    mutation.mutate(studentData);
  };

  const handleClose = () => {
    setStudentData({
      rollNumber: '',
      name: '',
      age: '',
      gender: '',
      address: {
        street: '',
        city: '',
        state: '',
        zip_code: '',
      },
    });
    navigate('/students');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('address.')) {
      const addressKey = name.split('.')[1];
      setStudentData((prevData) => ({
        ...prevData,
        address: { ...prevData.address, [addressKey]: value },
      }));
    } else {
      setStudentData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <Form onSubmit={handleCreate} className="p-4 shadow-sm rounded bg-light">
      <h3 className="text-center mb-4">Add New Student</h3>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={studentData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="rollNumber">
            <Form.Label>Roll No</Form.Label>
            <Form.Control
              type="text"
              name="rollNumber"
              value={studentData.rollNumber}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="age">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              name="age"
              value={studentData.age}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="gender">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              as="select"
              name="gender"
              value={studentData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <h5 className="mb-3">Address</h5>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="street">
            <Form.Label>Street</Form.Label>
            <Form.Control
              type="text"
              name="address.street"
              value={studentData.address.street}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              name="address.city"
              value={studentData.address.city}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="state">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              name="address.state"
              value={studentData.address.state}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="zip_code">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control
              type="text"
              name="address.zip_code"
              value={studentData.address.zip_code}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <div className="d-flex justify-content-between mt-4">
        <Button type="submit" variant="warning">
          Create Student
        </Button>
        <Button variant="warning" onClick={handleClose}>
          Close
        </Button>
      </div>
    </Form>
  );
};

export default AddStudents;
