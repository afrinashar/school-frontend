import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { getClasses, deleteClasses } from '../../api'; // Assumed API function
import { useQuery, useMutation, useQueryClient } from 'react-query';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import { Link, useNavigate } from 'react-router-dom'; // Ensure 'useNavigate' is imported correctly
import { Button } from 'react-bootstrap';

const ClassDetails = () => { 
  const navigate = useNavigate(); // 'useNavigate' hook should be defined here

  const { SearchBar } = Search;
  const queryClient = useQueryClient();

  // Move useMutation hook to the top, outside of any conditionals or returns
  const deleteMutation = useMutation(deleteClasses, {
    onSuccess: () => {
      queryClient.invalidateQueries('classes'); // Refetch classes after successful deletion
    },
    onError: (error) => {
      console.error('Error deleting class:', error);
    },
  });

  const { data: response, isLoading } = useQuery('classes', getClasses);

  // Ensure data is structured correctly
  const classes = response?.data || [];

  // Handle loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const update = (id) => {
    navigate(`/updateClass/${id}`);
  };

  const handleDelete = (id) => {
    deleteMutation.mutate(id);
  };

  const columns = [
    {
      dataField: 'className',
      text: 'Class Name',
      sort: true,
      headerStyle: { backgroundColor: '#FFBD33', color: '#000000' },
    },
    {
      dataField: 'section', 
      text: ' Section',
      sort: true,
      headerStyle: { backgroundColor: '#FFBD33', color: '#000000' },
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
            disabled={deleteMutation.isLoading}
          >
            🗑️
          </Button>
        </>
      ),
      headerStyle: {
        backgroundColor: '#FFBD33',
        color: '#000000',
      },
    },
  ];

  const rowStyle = { backgroundColor: '#eef2fc', color: '#000000' };

  const options = {
    paginationSize: 4,
    pageStartIndex: 0,
    showTotal: true,
    sizePerPageList: [
      { text: '5', value: 5 },
      { text: '10', value: 10 },
      { text: 'All', value: classes.length },
    ],
  };
console.log(classes);

  return (
    <>
      <Link to="/" className="btn btn-outline-warning m-3 border-0 text-black">
        Back to home
      </Link>
      <Link to="/createClass" className="btn btn-outline-warning float-end m-3">
        Add Class
      </Link>

      <ToolkitProvider keyField="_id" data={classes} columns={columns} search>
        {(props) => (
          <div>
            <SearchBar
              className="border border-warning d-flex mr-5 border-opacity-50 fluid"
              {...props.searchProps}
            />
            <hr />
            <BootstrapTable
              className="m-3"
              rowStyle={rowStyle}
              {...props.baseProps}
              pagination={paginationFactory(options)}
            />
          </div>
        )}
      </ToolkitProvider>
    </>
  );
};

export default ClassDetails;
