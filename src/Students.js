import BootstrapTable from 'react-bootstrap-table-next';
import { getStudents, deleteStudent } from '../src/api';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import { Button } from 'react-bootstrap';

const StudentDetails = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { SearchBar } = Search;

  // Fetching students data
  const { data: response, isLoading } = useQuery('students', getStudents);
  const students = response?.data || [];

  // Mutation for deleting a student
  const deleteMutation = useMutation(deleteStudent, {
    onSuccess: () => {
      queryClient.invalidateQueries('students'); // Refetch students after successful deletion
    },
    onError: (error) => {
      console.error('Error deleting student:', error);
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const update = (id) => {
    navigate(`/students/edit/${id}`);
    console.log(id, "Student ID for edit");
  };

  const marks = (id) => {
    navigate(`/marks/${id}`);
    console.log(id, "Student Marks for edit");
  };

  const handleDelete = (id) => {
    deleteMutation.mutate(id);
  };

  // Table Columns Definition
  const columns = [
    {
      dataField: 'rollNumber',
      text: 'Roll No',
      sort: true,
      headerStyle: {
        backgroundColor: '#FFBD33', // Yellow background for header
        color: "#000000",
      },
    },
    {
      dataField: 'name',
      text: 'Name',
      sort: true,
      headerStyle: {
        backgroundColor: '#FFBD33',
        color: "#000000",
      },
    },
    {
      dataField: 'age',
      text: 'Age',
      sort: true,
      headerStyle: {
        backgroundColor: '#FFBD33',
        color: "#000000",
      },
    },
    {
      dataField: 'gender',
      text: 'Gender',
      sort: true,
      headerStyle: {
        backgroundColor: '#FFBD33',
        color: "#000000",
      },
    },
    {
      dataField: 'address',
      text: 'Address',
      formatter: (cell) => {
        return `${cell.street}, ${cell.city}, ${cell.state}, ${cell.zip_code}`;
      },
      headerStyle: {
        backgroundColor: '#FFBD33',
        color: "#000000",
      },
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
            variant="outline-warning"
            className="mr-2"
            onClick={() => marks(row._id)}
          >
            Marks
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
      Showing <span className='text-warning'>{from}</span> to <span className='text-warning'>{to}</span> of <span className='text-warning'>{size}</span> Results
    </span>
  );
  <style>{`
    .page-item:first-child .page-link {
      border-top-left-radius: var(--bs-pagination-border-radius);
      border-bottom-left-radius: var(--bs-pagination-border-radius);
    }
    .active > .page-link, .page-link.active {
      z-index: 3;
      color: #fff;
      background-color: #FFBD33;
      border-color: #FFBD33;
    }
    .page-link {
      position: relative;
      display: block;
      padding: 0.75rem 1.25rem;
      font-size: 1rem;
      color: #fdf00d;
      text-decoration: none;
      background-color: #ffffff;
      border: 1px solid #dee2e6;
    }
    .page-link:hover {
      color: #fff;
      background-color: #fdf00d;
      border-color: #fdf00d;
    }
  `}</style>
  // Custom Pagination Options
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
      { text: 'All', value: students.length },
    ],
    // Custom class for pagination buttons
    paginationButtonRenderer: ({ page, onPageChange, isDisabled, active }) => (
      <li
        key={page}
        className={`page-item ${active ? 'active' : ''} ${isDisabled ? 'disabled' : ''}`}
      >
        <button
          className="page-link bg-warning text-dark"
          onClick={() => onPageChange(page)}
          disabled={isDisabled}
        >
          {page}
        </button>
      </li>
    ),
  };

  const rowStyle = { backgroundColor: '#eef2fc', color: '#000000' };

  return (
    <>
      <Link to="/" className="btn btn-outline-warning m-3 border-0 text-black">
        Back to Home
      </Link>
      <Link to="/createStudent" className="btn btn-outline-warning float-end m-3">
        Add Student
      </Link>
      <ToolkitProvider keyField="rollNumber" data={students || []} columns={columns} search>
        {(props) => (
          <div>
            <SearchBar
              className="border border-warning d-flex mr-5 border-opacity-50"
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

export default StudentDetails;
