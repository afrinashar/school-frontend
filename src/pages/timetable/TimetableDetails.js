import React from 'react';
import { useQuery } from 'react-query';
import { getTmietable } from '../../api';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

const TimetableDetails = () => {
  const { data: response, isLoading } = useQuery('timetables', getTmietable);
let timetables =response?.data||[]
  const columns = [
    { dataField: 'className', text: 'Class', sort: true },
    { dataField: 'section', text: 'Section', sort: true },
    { dataField: 'subjects', text: 'Subjects', formatter: (cell) => cell.map(subject => subject.name).join(', ') }
  ];

  if (isLoading) return <div>Loading...</div>;

  return (
    <BootstrapTable
      keyField="id"
      data={timetables}
      columns={columns}
      pagination={paginationFactory({})}
    />
  );
};

export default TimetableDetails;
