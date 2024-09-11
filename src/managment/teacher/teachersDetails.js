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
  const { data: response, isLoading, isError } = useQuery('teacher', getTeachers);
  const teachers = response?.data || [];

  if (isLoading) {
    return <Spinners />;
  }

  if (isError) {
    return <div>Error loading teachers data. Please try again later.</div>;
  }

  // If teachers is not an array, handle it appropriately
  if (!Array.isArray(teachers)) {
    return <div>Data format is incorrect. Please check the API response.</div>;
  }

  const update = (id) => {
    navigate(`/teachers/edit/${id}`);
  };

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
      formatter: (cell) => {
        return cell ? `${cell.street || ''}, ${cell.city || ''}, ${cell.state || ''}, ${cell.zip_code || ''}` : 'N/A';
      },
      headerAlign: 'center',
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
      headerAlign: 'center',
    },
  ];
 
  return (
    <>
      <Link to="/createTeacher" className='btn btn-outline-warning m-3'>
        <span className='text-black'>Add Teacher</span>
      </Link>
      <ToolkitProvider keyField="_id" data={teachers} columns={columns} search>
        {props => (
          <div>
            <SearchBar
              className="border border-warning border-opacity-50"
              {...props.searchProps}
            />
            <hr />
            <BootstrapTable
              {...props.baseProps}
            />
          </div>
        )}
      </ToolkitProvider>
    </>
  );
};

export default TeacherDetails;
