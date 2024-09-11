import React, { useState, useEffect } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { useMutation, useQuery } from 'react-query';
import { createMarks, getStudents } from '../api';
import { useNavigate } from 'react-router-dom';

const CreateMarks = () => {
  const navigate = useNavigate();
  const [marksData, setMarksData] = useState({
    student: '', // ID of the selected student
    internal: {
      tamil: '',
      english: '',
      mathematics: '',
      science: '',
      socialScience: '',
    },
    external: {
      tamil: '',
      english: '',
      mathematics: '',
      science: '',
      socialScience: '',
    },
  });

  const [errorMessage, setErrorMessage] = useState(null);
  const [students, setStudents] = useState([]);

  // Fetch students data
  const { data: studentData, isLoading: loadingStudents } = useQuery('students', getStudents);

  useEffect(() => {
    if (studentData) {
      setStudents(studentData.data);
    }
  }, [studentData]);

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
        setErrorMessage('Failed to create marks. Please try again.');
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
      
      {errorMessage && <p className="text-danger">{errorMessage}</p>} {/* Display error if it occurs */}

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="student">
            <Form.Label>Student</Form.Label>
            <Form.Control
              as="select"
              name="student"
              value={marksData.student}
              onChange={handleChange}
              required
            >
              <option value="">Select a student</option>
              {students.map(student => (
                <option key={student._id} value={student._id}>
                  {student.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      <h5 className="mb-3">Internal Marks</h5>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="internal.tamil">
            <Form.Label>Tamil</Form.Label>
            <Form.Control
              type="number"
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
              type="number"
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
          <Form.Group controlId="internal.mathematics">
            <Form.Label>Mathematics</Form.Label>
            <Form.Control
              type="number"
              name="internal.mathematics"
              value={marksData.internal.mathematics}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="internal.science">
            <Form.Label>Science</Form.Label>
            <Form.Control
              type="number"
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
          <Form.Group controlId="internal.socialScience">
            <Form.Label>Social Science</Form.Label>
            <Form.Control
              type="number"
              name="internal.socialScience"
              value={marksData.internal.socialScience}
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
              type="number"
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
              type="number"
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
          <Form.Group controlId="external.mathematics">
            <Form.Label>Mathematics</Form.Label>
            <Form.Control
              type="number"
              name="external.mathematics"
              value={marksData.external.mathematics}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="external.science">
            <Form.Label>Science</Form.Label>
            <Form.Control
              type="number"
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
          <Form.Group controlId="external.socialScience">
            <Form.Label>Social Science</Form.Label>
            <Form.Control
              type="number"
              name="external.socialScience"
              value={marksData.external.socialScience}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      
      <div className="d-flex justify-content-between mt-4">
        <Button type="submit" variant="warning" disabled={mutation.isLoading}>
          {mutation.isLoading ? 'Submitting...' : 'Add Marks'}
        </Button>
      </div>
    </Form>
  );
};

export default CreateMarks;
