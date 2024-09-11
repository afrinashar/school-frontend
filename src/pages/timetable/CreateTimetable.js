import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useMutation, useQuery } from 'react-query';
import { createTimetable, getClasses, getSubjects } from '../api';
import { useNavigate } from 'react-router-dom';

const CreateTimetable = () => {
  const navigate = useNavigate();
  
  const [timetableData, setTimetableData] = useState({
    class: '',
    subjects: [
      { period: '', subject: '' }
    ]
  });

  // Fetch classes and subjects to populate the dropdowns
  const { data: classes } = useQuery('classes', getClasses);
  const { data: subjects } = useQuery('subjects', getSubjects);

  const [errorMessage, setErrorMessage] = useState(null);

  const mutation = useMutation(createTimetable, {
    onSuccess: () => {
      navigate('/timetable');
    },
    onError: (error) => {
      setErrorMessage('Failed to create timetable. Please try again.');
    }
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (name === 'class') {
      setTimetableData((prevData) => ({ ...prevData, class: value }));
    } else {
      const subjectsCopy = [...timetableData.subjects];
      subjectsCopy[index][name] = value;
      setTimetableData((prevData) => ({ ...prevData, subjects: subjectsCopy }));
    }
  };

  const addSubjectRow = () => {
    setTimetableData((prevData) => ({
      ...prevData,
      subjects: [...prevData.subjects, { period: '', subject: '' }]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(timetableData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3>Create Timetable</h3>
      {errorMessage && <p className="text-danger">{errorMessage}</p>}
      
      <Form.Group controlId="class">
        <Form.Label>Class</Form.Label>
        <Form.Control as="select" name="class" value={timetableData.class} onChange={handleChange}>
          <option value="">Select Class</option>
          {classes && classes.map((cls) => (
            <option key={cls._id} value={cls._id}>{cls.className} - {cls.section}</option>
          ))}
        </Form.Control>
      </Form.Group>

      {timetableData.subjects.map((subject, index) => (
        <Row key={index} className="mb-3">
          <Col md={6}>
            <Form.Group controlId={`period-${index}`}>
              <Form.Label>Period</Form.Label>
              <Form.Control
                type="number"
                name="period"
                value={subject.period}
                onChange={(e) => handleChange(e, index)}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId={`subject-${index}`}>
              <Form.Label>Subject</Form.Label>
              <Form.Control as="select" name="subject" value={subject.subject} onChange={(e) => handleChange(e, index)}>
                <option value="">Select Subject</option>
                {subjects && subjects.map((sub) => (
                  <option key={sub._id} value={sub._id}>{sub.name}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
      ))}

      <Button variant="warning" onClick={addSubjectRow}>Add More Subjects</Button>
      <Button type="submit" className="mt-3">Create Timetable</Button>
    </Form>
  );
};

export default CreateTimetable;
