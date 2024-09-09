import BootstrapTable from 'react-bootstrap-table-next';
import { getTeachers } from '../../api';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import { Spinners } from '../../assets/Spinners';

const TeacherDetails = () => {
  const navigate = useNavigate();
  const { SearchBar } = Search;

  // Fetch teachers data using react-query
  const { data: teachers, isLoading } = useQuery('teacher', getTeachers);

  // Show loading spinner while fetching data
  if (isLoading) {
    return <Spinners />;
  }

  // Redirect to the edit page with the teacher's ID
  const update = (id) => {
    navigate(`/teachers/edit/${id}`);
  };

  // Table columns definition with sorting and formatted data
  const columns = [
    {
      dataField: '_id',
      text: 'Employee Code',
      headerAlign: 'center',
    },
    {
      dataField: 'name',
      text: 'Name',
      headerAlign: 'center',
    },
    {
      dataField: 'role',
      text: 'Role',
      headerAlign: 'center',
      sort: true,
    },
    {
      dataField: 'email',
      text: 'Email',
      headerAlign: 'center',
      sort: true,
    },
    {
      dataField: 'phone',
      text: 'Mobile Number',
      headerAlign: 'center',
      sort: true,
    },
    {
      dataField: 'age',
      text: 'Age',
      headerAlign: 'center',
      sort: true,
    },
    {
      dataField: 'address',
      text: 'Address',
      // Formatting address to display as a single string
      formatter: (cell) => {
        if (cell && cell.street && cell.city && cell.state && cell.zip_code) {
          return `${cell.street}, ${cell.city}, ${cell.state}, ${cell.zip_code}`;
        } else {
          return 'N/A';  // Handle case where address may be missing
        }
      },
      headerAlign: 'center',
    },
    {
      dataField: '_id',
      text: 'Actions',
      // Button for editing teacher details
      formatter: (cell, row) => (
        <button
          className="btn btn-outline-info"
          onClick={() => update(row._id)}
        >
          Edit
        </button>
      ),
      headerAlign: 'center',
    },
  ];

  return (
    <>
      {/* Button to add a new teacher */}
      <Link to="/createTeacher" className='btn btn-outline-warning m-3'>
        <span className='text-black'>Add Teacher</span>
      </Link>
      
      {/* Search and Table to display teacher data */}
      <ToolkitProvider
        keyField="_id"
        data={teachers || []}
        columns={columns}
        search
      >
        {
          props => (
            <div>
              {/* Search bar */}
              <SearchBar
                className="border border-warning border-opacity-50"
                {...props.searchProps}
              />
              <hr />
              
              {/* Table showing teacher details */}
              <BootstrapTable
                {...props.baseProps}
              />
            </div>
          )
        }
      </ToolkitProvider>
    </>
  );
};

export default TeacherDetails;
