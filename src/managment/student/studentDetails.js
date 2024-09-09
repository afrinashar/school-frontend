import BootstrapTable from 'react-bootstrap-table-next';
import { getStudents } from '../../api';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import { Spinners } from '../../assets/Spinners';

const StudentDetails = () => {
  const { SearchBar } = Search;
  const { data: students, isLoading } = useQuery('Student', getStudents);

  if (isLoading) {
    return <Spinners />;
  }

  console.log(students, "students data");

  // Define columns to match your schema
  const columns = [
    {
      dataField: 'rollNumber',
      text: 'Roll Number',
      headerAlign: 'center',
      sort: true,
    },
    {
      dataField: 'name',
      text: 'Name',
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
      dataField: 'gender',
      text: 'Gender',
      headerAlign: 'center',
    },
    {
      dataField: 'address.street',
      text: 'Street',
      headerAlign: 'center',
    },
    {
      dataField: 'address.city',
      text: 'City',
      headerAlign: 'center',
    },
    {
      dataField: 'address.state',
      text: 'State',
      headerAlign: 'center',
    },
    {
      dataField: 'address.zip_code',
      text: 'Zip Code',
      headerAlign: 'center',
    },
  ];

  const defaultSorted = [
    {
      dataField: 'rollNumber',
      order: 'asc',
    },
  ];

  return (
    <>
      <Link to="/add-student" className="btn btn-outline-warning m-3">
        <span className="text-black">Add Students</span>
      </Link>

      <ToolkitProvider keyField="rollNumber" data={students || []} columns={columns} search>
        {(props) => (
          <div>
            <SearchBar className="border border-warning border-opacity-50" {...props.searchProps} />
            <hr />
            <BootstrapTable {...props.baseProps} defaultSorted={defaultSorted} />
          </div>
        )}
      </ToolkitProvider>
    </>
  );
};

export default StudentDetails;
