import BootstrapTable from 'react-bootstrap-table-next';
import { getStudents } from '../src/api';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';

const StudentDetails = () => {
  const navigate = useNavigate();
  const { SearchBar } = Search;
  const { data: students, isLoading } = useQuery('Student', getStudents);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const update = (id) => {
    navigate(`/students/edit/${id}`);
    console.log(id, "Student ID for edit");
  };
  const marks = (id) => {
    navigate(`/students/marks/${id}`);
    console.log(id, "Student Marks for edit");
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
        <button
          className="btn btn-outline-warning"
          onClick={() => update(row._id)}
        >
          Edit
        </button>
      ),
      headerStyle: {
        backgroundColor: '#FFBD33',
        color: "#000000",
      },
    },
    {
      dataField: '_id',
      text: 'Actions',
      formatter: (cell, row) => (
        <button
          className="btn btn-outline-warning"
          onClick={() => marks(row._id)}
        >
          Marks
        </button>
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
