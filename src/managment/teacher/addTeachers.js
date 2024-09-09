import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { useMutation, queryClient } from 'react-query';
import { createTeachers } from '../../api';
import { useNavigate } from 'react-router-dom';

const AddTeachers = () => {
  const navigate = useNavigate();

  const mutation = useMutation(createTeachers, {
    onSuccess: () => {
      queryClient.invalidateQueries('teachers');
      console.log('Teacher created successfully');
      navigate('/teachers');
    },
    onError: (error) => {
      console.error('Error creating teacher:', error.response.data);
    },
  });

  const [teacherData, setTeacherData] = useState({
    rollNumber: '',
    name: '',
    age: '',
    gender: '',
    phone: '',
    address: {
      street: '',
      city: '',
      state: '',
      zip_code: '',
    },
    role: '',
    email: '',
  });

  const handleCreate = (e) => {
    e.preventDefault();
    mutation.mutate(teacherData);
  };

  const handleClose = () => {
    setTeacherData({
      rollNumber: '',
      name: '',
      age: '',
      gender: '',
      phone: '',
      address: {
        street: '',
        city: '',
        state: '',
        zip_code: '',
      },
      role: '',
      email: '',
    });
    navigate('/teachers');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('address.')) {
      const addressKey = name.split('.')[1];
      setTeacherData((prevData) => ({
        ...prevData,
        address: { ...prevData.address, [addressKey]: value },
      }));
    } else {
      setTeacherData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <Form onSubmit={handleCreate} className="p-4 shadow-sm rounded bg-light">
      <h3 className="text-center mb-4">Add New Teacher</h3>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={teacherData.name}
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
              value={teacherData.rollNumber}
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
              value={teacherData.age}
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
              value={teacherData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
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
              value={teacherData.address.street}
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
              value={teacherData.address.city}
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
              value={teacherData.address.state}
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
              value={teacherData.address.zip_code}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="phone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={teacherData.phone}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={teacherData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group controlId="role" className="mb-3">
        <Form.Label>Role</Form.Label>
        <Form.Control
          as="select"
          name="role"
          value={teacherData.role}
          onChange={handleChange}
          required
        >
          <option value="">Select Role</option>
          <option value="Junior">Junior</option>
          <option value="Senior">Senior</option>
        </Form.Control>
      </Form.Group>
      <div className="d-flex justify-content-between mt-4">
        <Button type="submit" variant="warning">
          Create Teacher
        </Button>
        <Button variant="warning" onClick={handleClose}>
          Close
        </Button>
      </div>
    </Form>
  );
};

export default AddTeachers;
