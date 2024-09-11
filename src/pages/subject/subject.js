import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { getSubjects, deleteSubjects } from '../../api';
import { useQuery, useMutation, queryClient } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import { Button } from 'react-bootstrap';
const SubjectDetails = () => {
  const { SearchBar } = Search;
  const navigate = useNavigate();

  const update = (id) => {
    navigate(`/subject/edit/${id}`);
    console.log(id, "Student ID for edit");
  };
  const deleteMutation = useMutation(deleteSubjects, {
    onSuccess: () => {
      queryClient.invalidateQueries('students'); // Refetch students after successful deletion
    },
    onError: (error) => {
      console.error('Error deleting student:', error);
    },
  });
   

  const handleDelete = (id) => {
    deleteMutation.mutate(id);
  };
  // Fetch subjects data
  const { data: response = [], isLoading, isError } = useQuery('subjects', getSubjects);
       let subjects= response.date||[]
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading subjects.</div>;
  }
console.log(response.data);

  // Define columns with correct dataField names
  const columns = [
    {
      dataField: 'name',
      text: 'Name',
      sort: true,
      headerStyle: { backgroundColor: '#FFBD33', color: '#000000' },
    },
    {
      dataField: 'class.name', // Adjust according to the actual field in your data
      text: 'Class',
      sort: true,
      headerStyle: { backgroundColor: '#FFBD33', color: '#000000' },
    },
    {
      dataField: 'teacher.name', // Adjust according to the actual field in your data
      text: 'Teacher',
      sort: true,
      headerStyle: { backgroundColor: '#FFBD33', color: '#000000' },
    },
    {
      dataField: 'code',
      text: 'Description',
      sort: true,
      headerStyle: { backgroundColor: '#FFBD33', color: '#000000' },
    },
    {
      dataField: 'isVerified',
      text: 'Verified',
      sort: true,
      headerStyle: { backgroundColor: '#FFBD33', color: '#000000' },
      formatter: (cell) => (cell ? 'Yes' : 'No'),
    },
    {
      dataField: '_id',
      text: 'Actions',
      formatter: (cell, row) => (
        <>
          <Button
            variant="outline-warning"
            className="mr-2"
            onClick={() => update(row._id)}
          >
            Edit
          </Button>
           
          <Button
            variant="outline-danger border border-danger"
            onClick={() => handleDelete(row._id)}
            disabled={deleteMutation.isLoading} // Disable button while deleting
          >
 🗑️          </Button>
        </>
      ),
      headerStyle: {
        backgroundColor: '#FFBD33',
        color: "#000000",
      },
    },
  ];

  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing <span className='text-warning'>{from}</span> to <span className='text-warning'>{to}</span> of <span className='text-warning text-bold'>{size}</span> Results
    </span>
  );

  const options = {
    paginationSize: 4,
    pageStartIndex: 0,
    firstPageText: 'First',
    prePageText: 'Back',
    nextPageText: 'Next',
    lastPageText: 'Last',
    showTotal: true,
    paginationTotalRenderer: customTotal,
    sizePerPageList: [
      { text: '5', value: 5 },
      { text: '10', value: 10 },
      { text: 'All', value: subjects.length },
    ],
  };

  const rowStyle = { backgroundColor: '#eef2fc', color: '#000000' };

  return (
    <>
      <Link to="/" className="btn btn-outline-warning m-3 border-0 text-black">Back to Home</Link>
      <Link to="/subjects/create" className="btn btn-outline-warning float-end m-3">Add Subject</Link>
      <ToolkitProvider
        keyField="_id" // Assuming '_id' is the unique identifier
        data={subjects}
        columns={columns}
        search
      >
        {(props) => (
          <div>
            <SearchBar className="border border-warning d-flex mr-5 border-opacity-50" {...props.searchProps} />
            <hr />
            <BootstrapTable
              className="m-3"
              rowStyle={rowStyle}
              columns={columns}
              {...props.baseProps}
              pagination={paginationFactory(options)}
            />
          </div>
        )}
      </ToolkitProvider>
    </>
  );
};

export default SubjectDetails;
