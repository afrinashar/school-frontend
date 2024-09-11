import BootstrapTable from 'react-bootstrap-table-next';
import { getMarks } from '../api';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import { Spinners } from '../assets/Spinners';

const MarksDetails =  () => {
  const { SearchBar } = Search;

  // Fetch marks data
  const { data: marks, isLoading } = useQuery('Marks', getMarks);

  if (isLoading) {
    return <Spinners />;
  }

  // Define columns with nested fields
  const columns = [
    {
      dataField: 'student.name', // Assuming 'name' is a field in the 'student' reference
      text: 'Student Name',
      headerAlign: 'center',
      sort: true,
    },
    {
      dataField: 'internal.tamil',
      text: 'Tamil (Internal)',
      headerAlign: 'center',
    },
    {
      dataField: 'internal.english',
      text: 'English (Internal)',
      headerAlign: 'center',
    },
    {
      dataField: 'internal.mathmaticals',
      text: 'Mathematics (Internal)',
      headerAlign: 'center',
    },
    {
      dataField: 'internal.science',
      text: 'Science (Internal)',
      headerAlign: 'center',
    },
    {
      dataField: 'internal.socialscience',
      text: 'Social Science (Internal)',
      headerAlign: 'center',
    },
    {
      dataField: 'external.tamil',
      text: 'Tamil (External)',
      headerAlign: 'center',
    },
    {
      dataField: 'external.english',
      text: 'English (External)',
      headerAlign: 'center',
    },
    {
      dataField: 'external.mathmaticals',
      text: 'Mathematics (External)',
      headerAlign: 'center',
    },
    {
      dataField: 'external.science',
      text: 'Science (External)',
      headerAlign: 'center',
    },
    {
      dataField: 'external.socialscience',
      text: 'Social Science (External)',
      headerAlign: 'center',
    },
  ];

  return (
    <>
      <Link to="/addMarks" className="btn btn-outline-warning m-3">
        <span className="text-black">Add Marks</span>
      </Link>

      <ToolkitProvider
        keyField="_id" // Assuming each mark entry has a unique '_id' field
        data={marks || []}
        columns={columns}
        search
      >
        {(props) => (
          <div>
            <SearchBar
              className="border border-warning border-opacity-50 hover:"
              {...props.searchProps}
            />
            <hr />
            <BootstrapTable
              {...props.baseProps}
              // Default sorting or other features can be added here if needed
            />
          </div>
        )}
      </ToolkitProvider>
    </>
  );
};

export default MarksDetails;
