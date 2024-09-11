import BootstrapTable from 'react-bootstrap-table-next';
import { getMarks, getStudents } from '../src/api';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { Spinners } from './assets/Spinners';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';

const MarkDetails = () => {
  const { SearchBar } = Search;

  // Fetch marks and students data
  const { data: marksResponse, isLoading, isError } = useQuery('Marks', getMarks);
  const { data: studentsResponse } = useQuery('Students', getStudents);

  const marks = marksResponse?.data || [];
  const students = studentsResponse?.data || [];

  if (isLoading) {
    return <Spinners />;
  }

  if (isError) {
    return <div>Error loading marks data. Please try again later.</div>;
  }

  // Function to find the student's name based on their ID
  const getStudentName = (studentId) => {
    const student = students.find((student) => student._id === studentId);
    return student ? student.name : 'Unknown';
  };

  // Attach student name to each mark entry
  const marksWithStudentNames = marks.map((mark) => ({
    ...mark,
    studentName: getStudentName(mark.studentId),
  }));

  // Function to calculate total marks
  const calculateTotal = (subjectMarks) => {
    return Object.values(subjectMarks).reduce((sum, mark) => sum + mark, 0);
  };

  // Function to calculate average marks
  const calculateAverage = (subjectMarks) => {
    const total = calculateTotal(subjectMarks);
    const numberOfSubjects = Object.keys(subjectMarks).length;
    return (total / numberOfSubjects).toFixed(2);
  };

  // Function to determine pass/fail status
  const calculatePassFail = (subjectMarks) => {
    const passingMarks = 35; // Define passing marks threshold per subject
    const hasFailed = Object.values(subjectMarks).some((mark) => mark < passingMarks);
    return hasFailed ? 'Fail' : 'Pass';
  };

  // Define internal columns
  const internalColumns = [
    {
      dataField: 'student.rollNo',
      text: 'Student Name',
      headerAlign: 'center',
      sort: true,
    },
    {
      dataField: 'internal.tamil',
      text: 'Tamil   ',
      headerAlign: 'center',
    },
    {
      dataField: 'internal.english',
      text: 'English   ',
      headerAlign: 'center',
    },
    {
      dataField: 'internal.mathematics',
      text: 'Mathematics   ',
      headerAlign: 'center',
    },
    {
      dataField: 'internal.science',
      text: 'Science   ',
      headerAlign: 'center',
    },
    {
      dataField: 'internal.socialScience',
      text: 'Social Science   ',
      headerAlign: 'center',
    },
    {
      dataField: 'totalInternal',
      text: 'Total   ',
      headerAlign: 'center',
      formatter: (cell, row) => calculateTotal(row.internal),
    },
    {
      dataField: 'averageInternal',
      text: 'Average   ',
      headerAlign: 'center',
      formatter: (cell, row) => calculateAverage(row.internal),
    },
    {
      dataField: 'passFailInternal',
      text: 'Pass/Fail   ',
      headerAlign: 'center',
      formatter: (cell, row) => calculatePassFail(row.internal),
    },
  ];

  // Define external columns
  const externalColumns = [
    {
      dataField: 'name',
      text: 'Student Name',
      headerAlign: 'center',
      sort: true,
    },
    {
      dataField: 'external.tamil',
      text: 'Tamil  ',
      headerAlign: 'center',
    },
    {
      dataField: 'external.english',
      text: 'English  ',
      headerAlign: 'center',
    },
    {
      dataField: 'external.mathematics',
      text: 'Mathematics  ',
      headerAlign: 'center',
    },
    {
      dataField: 'external.science',
      text: 'Science  ',
      headerAlign: 'center',
    },
    {
      dataField: 'external.socialScience',
      text: 'Social Science  ',
      headerAlign: 'center',
    },
    {
      dataField: 'totalExternal',
      text: 'Total  ',
      headerAlign: 'center',
      formatter: (cell, row) => calculateTotal(row.external),
    },
    {
      dataField: 'averageExternal',
      text: 'Average  ',
      headerAlign: 'center',
      formatter: (cell, row) => calculateAverage(row.external),
    },
    {
      dataField: 'passFailExternal',
      text: 'Pass/Fail  ',
      headerAlign: 'center',
      formatter: (cell, row) => calculatePassFail(row.external),
    },
  ];

  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing <span className="text-warning">{from}</span> to{' '}
      <span className="text-warning">{to}</span> of{' '}
      <span className="text-warning">{size}</span> Results
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
      { text: 'All', value: marks.length },
    ],
  };

  return (
    <>
      <Link to="addMarks" className="btn btn-outline-warning m-3">
        <span className="text-black">Add Marks</span>
      </Link>

      {/* Internal Marks Table */}
      <h4 className="text-center text-warning mt-4">Internal Marks</h4>
      <ToolkitProvider
        keyField="_id" // Assuming each mark entry has a unique '_id' field
        data={marksWithStudentNames || []}
        columns={internalColumns}
        search
      >
        {(props) => (
          <div>
            <SearchBar
              className="border border-warning border-opacity-50"
              {...props.searchProps}
            />
            <hr />
            <BootstrapTable
              {...props.baseProps}
              pagination={paginationFactory(options)}
            />
          </div>
        )}
      </ToolkitProvider>

      {/* External Marks Table */}
      <h4 className="text-center text-warning mt-4">External Marks</h4>
      <ToolkitProvider
        keyField="_id" // Assuming each mark entry has a unique '_id' field
        data={marksWithStudentNames || []}
        columns={externalColumns}
        search
      >
        {(props) => (
          <div>
            <SearchBar
              className="border border-warning border-opacity-50"
              {...props.searchProps}
            />
            <hr />
            <BootstrapTable
              {...props.baseProps}
              pagination={paginationFactory(options)}
            />
          </div>
        )}
      </ToolkitProvider>
    </>
  );
};

export default MarkDetails;
