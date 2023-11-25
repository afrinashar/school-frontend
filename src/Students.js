import React, { useState, useEffect } from 'react';
import {Form} from 'react-bootstrap';
import {Link} from "react-router-dom" ; 
import Pagination from 'react-bootstrap/Pagination';
import { getStudents } from './api';
const Students=()=>{
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [photosPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  useEffect(() => {
    const fetchPhotos = async () => {
      const data = await getStudents();
      setStudents(data);
  
    };
    fetchPhotos();
  }, []);

  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = students.slice(indexOfFirstPhoto, indexOfLastPhoto);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Search logic
  const filteredPhotos = currentPhotos.filter((photo) =>
    photo.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(filteredPhotos,"filteredPhotos");


    // Sorting logic
 const sortedPhotos = [...filteredPhotos].sort((a, b) => {
    const order = sortOrder === 'asc' ? 1 : -1;
    return order * a.name.localeCompare(b.name);
  });

    return(<>
     <Link to={"/"}>back to home</Link>
    <Form className="d-flex">
    <Form.Control
      type="search"
      placeholder="Search"
      className="mx-5 my-4"
      aria-label="Search"
    />
   
  </Form>   <button className="btn btn-outline-info">Add Student</button>
    <h1>Students Details</h1>
    <table className="table">
      <thead>
        <tr>
          <th>Student ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Grade Level</th>
          <th>Address</th>
          <th>Marks</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.student_id}>
            <td>{student.student_id}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.grade_level}</td>
            <td>
              {`${student.address.street}, ${student.address.city}, ${student.address.state}, ${student.address.zip_code}`}
            </td>
            <td>
              {`Tamil: ${student.marks.tamil}, English: ${student.marks.english}, Mathematics: ${student.marks.mathmaticals}, Science: ${student.marks.science}, Social Science: ${student.marks.socialscience}`}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </>)
}
export default Students