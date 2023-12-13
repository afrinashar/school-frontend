import React, { useState, useEffect } from 'react';
import {Form} from 'react-bootstrap';
import {Link} from "react-router-dom" ; 
import Pagination from 'react-bootstrap/Pagination';
import { getStudents } from './api';
import { useQuery } from 'react-query';
const Students=()=>{
 // const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [photosPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const { data: students, isLoading, isError,isFetching } = useQuery(['students' ],   {staleTime:3000});
  if (isLoading || isFetching) {
    return <h1>loading...</h1>
  }

  if (isError) {
    return <div>Error fetching photos</div>;
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  console.log(students ,"data");
  // useEffect(() => {
  //   const fetchPhotos = async () => {
  //     const data = await getStudents();
  //     setStudents(data);
  
  //   };
  //   fetchPhotos();
  // }, []);

  // const indexOfLastPhoto = currentPage * photosPerPage;
  // const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  // const currentPhotos = students.slice(indexOfFirstPhoto, indexOfLastPhoto);

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Search logic
//   const filteredPhotos = currentPhotos.filter((photo) =>
//     photo.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     console.log(filteredPhotos,"filteredPhotos");
// //Total
// //const Total = {student.marks.tamil}+{student.marks.english}+{student.marks.mathmaticals}+ {student.marks.science}+{student.marks.socialscience}

//     // Sorting logic
//  const sortedPhotos = [...filteredPhotos].sort((a, b) => {
//     const order = sortOrder === 'asc' ? 1 : -1;
//     return order * a.name.localeCompare(b.name);
//   });

    return(<>
     <Link to={"/"} className=' btn btn-outline-warning  border-0 text-black' >back to home</Link>    <h1 className='xs-8 lg-10'>Students Details</h1>
     <form className="d-flex input-group w-auto">
    <input
   
     className="form-control   rounded"
        type="text"
        placeholder="Search photos..."
        value={searchTerm}
        onChange={handleSearch}
      />
      
    </form>
   <button className="btn btn-outline-warning"><span className='text-black'>Add Student</span></button>

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
            <td>{student.name} </td>
            <td>{student.age}</td>
            <td>{student.grade_level}</td>
            <td>
              {`${student.address.street}, ${student.address.city}, ${student.address.state}, ${student.address.zip_code}`}
            </td>
            <td>
              {`Tamil: ${student.marks.tamil}, English: ${student.marks.english}, Mathematics: ${student.marks.mathmaticals}, Science: ${student.marks.science}, Social Science: ${student.marks.socialscience}`}
            </td>
          <td><button  ></button></td>
          </tr>
        ))}
      </tbody>
    </table>
  </>)
}
export default Students