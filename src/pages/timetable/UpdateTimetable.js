import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getTimetable, updateTimetable, getClasses, getSubjects } from '../api';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateTimetable = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [timetableData, setTimetableData] = useState({
    class: '',
    subjects: [{ period: '', subject: '' }]
  });

  const { data: timetable, isLoading } = useQuery(['timetable', id], () => getTimetable(id));
  const { data: classes } = useQuery('classes', getClasses);
  const { data: subjects } = useQuery('subjects', getSubjects);

  useEffect(() => {
    if (timetable) {
      setTimetableData(timetable);
    }
  }, [timetable]);

  const mutation = useMutation(updateTimetable, {
    onSuccess: () => {
      queryClient.invalidateQueries('timetable');
      navigate('/timetable');
    },
    onError: (error) => {
      console.error('Failed to update timetable', error);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ id, data: timetableData });
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <Form onSubmit={handleSubmit}>
      <h3>Update Timetable</h3>

      <Form.Group controlId="class">
        <Form.Label>Class</Form.Label>
        <Form.Control as="select" name="class" value={timetableData.class} onChange={handleChange}>
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
                {subjects && subjects.map((sub) => (
                  <option key={sub._id} value={sub._id}>{sub.name}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
      ))}

      <Button type="submit" className="mt-3">Update Timetable</Button>
    </Form>
  );
};

export default UpdateTimetable;
