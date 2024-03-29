import BootstrapTable from 'react-bootstrap-table-next';
import { getStudents } from '../../api';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
 
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
 
import { Spinners } from '../../assets/Spinners';

  const StudentDetails = () => {
    const { SearchBar } = Search;

    const { data: students, isLoading  } = useQuery('Student', getStudents);
    if (isLoading) {
        return  <Spinners/>
      }
console.log(students,"stu");
    const columns = [{
  dataField: 'student',
  text: 'Product ID',
  headerAlign: 'center'
}, {
  dataField: 'name',
  text: 'Product Name',
  headerAlign: 'center',
  sort: true
}, {
  dataField: 'price',
  text: 'Product Price'
}];

console.log(students,"sti");
  return (<>
  <Link className=' btn btn-outline-warning m-3'><span className='text-black'>Add Students</span></Link>
    
    <ToolkitProvider
  keyField="Student"
  data={ students }
  columns={ columns }
  search
>
  {
    props => (
      <div>
       
        <SearchBar className="border border-warning border-opacity-50 hover:" { ...props.searchProps } />
        <hr />
        <BootstrapTable
          { ...props.baseProps }
          defaultSorted={ defaultSorted } 
        />
      </div>
    )
  }
</ToolkitProvider>
 
  </>)
}
export default StudentDetails