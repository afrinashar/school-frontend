import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { useMutation } from 'react-query';
import { createMarks } from '../api';
import { useNavigate } from 'react-router-dom';
 import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
const CreateMarks = () => {
  const { data: marks, isLoading } = useQuery('Marks', createMarks);

  const navigate = useNavigate();

  // Define initial form state
  const [marksData, setMarksData] = useState({
    student: '', // assuming student ID or reference
    internal: {
      tamil: '',
      english: '',
      mathmaticals: '',
      science: '',
      socialscience: '',
    },
    external: {
      tamil: '',
      english: '',
      mathmaticals: '',
      science: '',
      socialscience: '',
    },
  });

  // Mutation for creating marks
  const mutation = useMutation(
    (newMarks) => createMarks(newMarks),
    {
      onSuccess: () => {
        console.log('Marks created successfully');
        navigate('/marks'); // Navigate to marks list or any other page on success
      },
      onError: (error) => {
        console.error('Error creating marks:', error);
      },
    }
  );

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('internal.') || name.startsWith('external.')) {
      const [type, field] = name.split('.');
      setMarksData((prevData) => ({
        ...prevData,
        [type]: { ...prevData[type], [field]: value },
      }));
    } else {
      setMarksData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(marksData);
  };

  return (
    <Form onSubmit={handleSubmit} className="p-4 shadow-sm rounded bg-light">
      <h3 className="text-center mb-4">Add Marks</h3>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="student">
            <Form.Label>Student ID</Form.Label>
            <Form.Control
              type="text"
              name="student"
              value={marksData.student}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <h5 className="mb-3">Internal Marks</h5>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="internal.tamil">
            <Form.Label>Tamil</Form.Label>
            <Form.Control
              type="text"
              name="internal.tamil"
              value={marksData.internal.tamil}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="internal.english">
            <Form.Label>English</Form.Label>
            <Form.Control
              type="text"
              name="internal.english"
              value={marksData.internal.english}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="internal.mathmaticals">
            <Form.Label>Mathematics</Form.Label>
            <Form.Control
              type="text"
              name="internal.mathmaticals"
              value={marksData.internal.mathmaticals}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="internal.science">
            <Form.Label>Science</Form.Label>
            <Form.Control
              type="text"
              name="internal.science"
              value={marksData.internal.science}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="internal.socialscience">
            <Form.Label>Social Science</Form.Label>
            <Form.Control
              type="text"
              name="internal.socialscience"
              value={marksData.internal.socialscience}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <h5 className="mb-3">External Marks</h5>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="external.tamil">
            <Form.Label>Tamil</Form.Label>
            <Form.Control
              type="text"
              name="external.tamil"
              value={marksData.external.tamil}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="external.english">
            <Form.Label>English</Form.Label>
            <Form.Control
              type="text"
              name="external.english"
              value={marksData.external.english}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="external.mathmaticals">
            <Form.Label>Mathematics</Form.Label>
            <Form.Control
              type="text"
              name="external.mathmaticals"
              value={marksData.external.mathmaticals}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="external.science">
            <Form.Label>Science</Form.Label>
            <Form.Control
              type="text"
              name="external.science"
              value={marksData.external.science}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="external.socialscience">
            <Form.Label>Social Science</Form.Label>
            <Form.Control
              type="text"
              name="external.socialscience"
              value={marksData.external.socialscience}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      
      <div className="d-flex justify-content-between mt-4">
        <Button type="submit" variant="warning">
          Add Marks
        </Button>
      </div>
    </Form>
  );
};

export default CreateMarks;
