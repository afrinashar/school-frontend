/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { useMutation, useQuery } from 'react-query';
import { createSubjects, getClasses, getTeachers } from '../../api'; // Adjust the import paths as needed
import { useNavigate } from 'react-router-dom';

const createSubject = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();

  // Define initial form state
  const [subjectData, setSubjectData] = useState({
    name: '',
    class: '', // Assuming class ID or reference
    teacher: '', // Assuming teacher ID or reference
  });

  const [errorMessage, setErrorMessage] = useState(null);

  // Fetch classes and teachers
  const { data: response = [], isLoading: isClassesLoading } = useQuery('classes', getClasses);
  const { data: responses = [], isLoading: isTeachersLoading } = useQuery('teachers', getTeachers);
let classes =response.data
let teachers= responses.data
  const mutation = useMutation(
    (newSubject) => createSubjects(newSubject),
    {
      onSuccess: () => {
        console.log('Subject created successfully');
        navigate('/subjects'); // Navigate to subjects list or any other page on success
      },
      onError: (error) => {
        console.error('Error creating subject:', error);
        setErrorMessage('Failed to create subject. Please try again.');
      },
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubjectData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(subjectData);
  };

  if (isClassesLoading || isTeachersLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Form onSubmit={handleSubmit} className="p-4 shadow-sm rounded bg-light">
      <h3 className="text-center mb-4">Add Subject</h3>

      {errorMessage && <p className="text-danger">{errorMessage}</p>} {/* Display error if it occurs */}

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="name">
            <Form.Label>Subject Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={subjectData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="class">
            <Form.Label>Class</Form.Label>
            <Form.Control
              as="select"
              name="class"
              value={subjectData.class}
              onChange={handleChange}
              required
            >
              <option value="">Select Class</option>
              {classes.map((cls) => (
                <option key={cls._id} value={cls._id}>
                  {cls.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="teacher">
            <Form.Label>Teacher</Form.Label>
            <Form.Control
              as="select"
              name="teacher"
              value={subjectData.teacher}
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

      <div className="d-flex justify-content-between mt-4">
        <Button type="submit" variant="warning">
          Add Subject
        </Button>
      </div>
    </Form>
  );
};

export default createSubject;
