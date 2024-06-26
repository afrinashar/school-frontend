import React, { useState, useEffect } from 'react';
import {Form} from 'react-bootstrap';
import {Link} from "react-router-dom" ; 
//import Contact from './Contact';
import Pagination from 'react-bootstrap/Pagination';
import { getTeacher } from './api';
const Teachers=()=>{
  const [teachers, setTeachers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [photosPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  useEffect(() => {
    const fetchPhotos = async () => {
      const data = await getTeacher();
      setTeachers(data);
  
    };
    fetchPhotos();
  }, []);

  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = teachers.slice(indexOfFirstPhoto, indexOfLastPhoto);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Search logic
  const filteredPhotos = currentPhotos.filter((photo) =>
    photo.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(filteredPhotos,"filteredPhotos");
//Total
//const Total = {teacher.marks.tamil}+{teacher.marks.english}+{teacher.marks.mathmaticals}+ {teacher.marks.science}+{teacher.marks.socialscience}

    // Sorting logic
 const sortedPhotos = [...filteredPhotos].sort((a, b) => {
    const order = sortOrder === 'asc' ? 1 : -1;
    return order * a.name.localeCompare(b.name);
  });
  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total   ">
      Showing <span className='text-warning'>{ from }</span> to <span className='text-warning'>{ to }</span> of <span className='text-warning text-bold'>{ size }</span> Results
    </span>
  );
  console.log(teachers.data
     ,"ids",teachers);
  const options = {
    className:"bgs",
    paginationSize: 4,
    pageStartIndex: 0,
    // alwaysShowAllBtns: true, // Always show next and previous button
    // withFirstAndLast: false, // Hide the going to First and Last page button
    // hideSizePerPage: true, // Hide the sizePerPage dropdown always
    // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
    firstPageText: 'First',
    prePageText: 'Back',
    nextPageText: 'Next',
    lastPageText: 'Last',
    nextPageTitle: 'First page',
    prePageTitle: 'Pre page',
    firstPageTitle: 'Next page',
    lastPageTitle: 'Last page',
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    backgroundColor:"000000",
    sizePerPageList: [{
      text: '5', value: 5
    }, {
      text: '10', value: 10
    }, {
      text: 'All', value: teachers.length
    }] // A numeric array is also available. the purpose of above example is custom the text
  };
  console.log(teachers,options,"sti");
  const rowStyle = { backgroundColor: '#eef2fc',color: '#000000'};
  
    return(<>
     <Link to={"/"} className=' btn btn-outline-warning  border-0 text-black'>back to home</Link> <h1>teachers Details</h1>
    <Form className="d-flex">
    <Form.Control
      type="search"
      placeholder="Search"
      className="mx-5 my-4"
      aria-label="Search"
    />
   
  </Form>   <button className="btn btn-outline-warning"><span className='text-black'>Add teacher</span></button>
   
    <table className="table">
      <thead>
        <tr>
          <th>teacher ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Grade Level</th>
          <th>Address</th>
          <th>Marks</th>
        </tr>
      </thead>
      <tbody>
        {teachers.map((teacher) => (
          <tr key={teacher.teacher_id}>
            <td>{teacher.teacher_id}</td>
            <td>{teacher.name} </td>
            <td>{teacher.age}</td>
            <td>{teacher.grade_level}</td>
            <td>
              {`${teacher.address.street}, ${teacher.address.city}, ${teacher.address.state}, ${teacher.address.zip_code}`}
            </td>
            <td>
              {`Tamil: ${teacher.marks.tamil}, English: ${teacher.marks.english}, Mathematics: ${teacher.marks.mathmaticals}, Science: ${teacher.marks.science}, Social Science: ${teacher.marks.socialscience}`}
            </td>
          <td><button  ></button></td>
          </tr>
        ))}
      </tbody>
    </table>
    
  </>)
}
export default Teachers