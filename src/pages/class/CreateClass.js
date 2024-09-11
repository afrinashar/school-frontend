/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { useMutation, useQuery } from 'react-query';
import { createClasses, getTeachers } from '../../api'; // Assumed API functions
import { useNavigate } from 'react-router-dom';

const CreateClass = () => {
  const navigate = useNavigate();
  
  const [classData, setClassData] = useState({
    className: '',
    section: '',
    teacher: '', // Assuming teacher ID
  });

  // Fetch teachers data
  const { data: teachersResponse, isLoading: teachersLoading } = useQuery('teachers', getTeachers);

  const mutation = useMutation((newClass) => createClasses(newClass), {
    onSuccess: () => {
      navigate('/class'); // Navigate to class list after success
    },
    onError: (error) => {
      console.error('Error creating class:', error);
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClassData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(classData);
  };

  if (teachersLoading) {
    return <div>Loading teachers...</div>;
  }

  const teachers = teachersResponse?.data || [];

  return (
    <Form onSubmit={handleSubmit} className="p-4 shadow-sm rounded bg-light">
      <h3 className="text-center mb-4">Create Class</h3>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="className">
            <Form.Label>Class Name</Form.Label>
            <Form.Control
              type="text"
              name="className"
              value={classData.className}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="section">
            <Form.Label>Section</Form.Label>
            <Form.Control
              type="text"
              name="section"
              value={classData.section}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="teacher">
            <Form.Label>Teacher</Form.Label>
            <Form.Control
              as="select"
              name="teacher"
              value={classData.teacher}
              onChange={handleChange}
              required
            >
              <option value="">Select Teacher</option>
              {teachers.map((teacher) => (
                <option key={teacher._id} value={teacher._id}>
                  {teacher.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      <Button type="submit" variant="warning">
        Add Class
      </Button>
    </Form>
  );
};

export default CreateClass;
