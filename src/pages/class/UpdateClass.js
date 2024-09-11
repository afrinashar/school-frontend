import React, { useState, useEffect } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { useMutation, useQuery } from 'react-query';
import { useParams, useNavigate } from 'react-router-dom';
import { getClassesById, updateClasses } from '../../api'; // Assumed API functions

const UpdateClass = () => {
  const { id } = useParams(); // Get class ID from URL
  const navigate = useNavigate();
  
  const { data: classData, isLoading } = useQuery(['class', id], () => getClassesById(id), {
    enabled: !!id, // Only run the query if the ID is available
  });

  const [formData, setFormData] = useState({
    className: '',
    section: '',
    teacher: '',
  });

  // Set form data once the class data is fetched
  useEffect(() => {
    if (classData) {
      setFormData({
        className: classData.className,
        section: classData.section,
        teacher: classData.teacher?._id || '', // Assuming teacher is populated with object
      });
    }
  }, [classData]);

  const mutation = useMutation((updatedClass) => updateClasses(id, updatedClass), {
    onSuccess: () => {
      navigate('/classes'); // Navigate back to the class list after successful update
    },
    onError: (error) => {
      console.error('Error updating class:', error);
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
      <h3 className="text-center mb-4">Update Class</h3>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="className">
            <Form.Label>Class Name</Form.Label>
            <Form.Control
              type="text"
              name="className"
              value={formData.className}
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
              value={formData.section}
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
        Update Class
      </Button>
    </Form>
  );
};

export default UpdateClass;
