import React, { useState, useEffect } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { useMutation, useQuery } from 'react-query';
import { useParams, useNavigate } from 'react-router-dom';
import { getSubjectsById, updateSubjects } from '../../api'; // Assumed API functions

const UpdateSubject = () => {
  const { id } = useParams(); // Get subject ID from URL
  const navigate = useNavigate();

  const { data: subjectData, isLoading } = useQuery(['subject', id], () => getSubjectsById(id), {
    enabled: !!id, // Only run the query if the ID is available
  });

  const [formData, setFormData] = useState({
    name: '',
    class: '',
    teacher: '',
  });

  // Set form data once the subject data is fetched
  useEffect(() => {
    if (subjectData) {
      setFormData({
        name: subjectData.name,
        class: subjectData.class?._id || '', // Assuming class is populated with object
        teacher: subjectData.teacher?._id || '', // Assuming teacher is populated with object
      });
    }
  }, [subjectData]);

  const mutation = useMutation((updatedSubject) => updateSubjects(id, updatedSubject), {
    onSuccess: () => {
      navigate('/subjects'); // Navigate back to the subject list after successful update
    },
    onError: (error) => {
      console.error('Error updating subject:', error);
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Form onSubmit={handleSubmit} className="p-4 shadow-sm rounded bg-light">
      <h3 className="text-center mb-4">Update Subject</h3>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="name">
            <Form.Label>Subject Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="class">
            <Form.Label>Class</Form.Label>
            <Form.Control
              type="text"
              name="class"
              value={formData.class}
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
              type="text"
              name="teacher"
              value={formData.teacher}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Button type="submit" variant="warning">
        Update Subject
      </Button>
    </Form>
  );
};

export default UpdateSubject;
