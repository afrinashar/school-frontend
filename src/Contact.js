
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { getStudents } from './api';
import React, { useState, useEffect } from 'react';
const Contact=()=>{

    const [students, setStudents] = useState([]);
    const { SearchBar } = Search;
    useEffect(() => {
        const fetchPhotos = async () => {
          const data = await getStudents();
          setStudents(data);
      
        }})
const columns = [{
  dataField: 'id',
  text: (students.name)
}, {
  dataField: 'name',
  text: (students.tamil)
}, {
  dataField: 'price',
  text:  (students.english)
}];
return(<>


<ToolkitProvider
  keyField="id"
  data={ products }
  columns={ columns }
  search
>
  {
    props => (
      <div>
        <h3>Input something at below input field:</h3>
        <SearchBar { ...props.searchProps } />
        <hr />
        <BootstrapTable
          { ...props.baseProps }
        />
      </div>
    )
  }
</ToolkitProvider>

</>)
}
export default Contact