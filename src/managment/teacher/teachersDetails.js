import BootstrapTable from 'react-bootstrap-table-next';
import { getTeachers } from '../../api';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
 
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
 
import { Spinners } from '../../assets/Spinners';

  const TeacherDetails = () => {
    const { SearchBar } = Search;

    const { data: teacher, isLoading  } = useQuery('teacher', getTeachers);
    if (isLoading) {
        return  <Spinners/>
      }
console.log(teacher,"stu");
    const columns = [
      {
        dataField: '_id',
        text: 'Employee code',
        headerAlign: 'center'
      },{
  dataField: 'name',
  text: 'Name',
  headerAlign: 'center'
},
{
  dataField: 'role',
  text: 'Role',
  headerAlign: 'center',
  sort: true
},
{
  dataField: 'email',
  text: 'Email',
  headerAlign: 'center',
  sort: true
},
{
  dataField: 'phone',
  text: 'Mobile Number ',
  headerAlign: 'center',
  sort: true
}, 
{
  dataField: 'age',
  text: 'Age',
  headerAlign: 'center',
  sort: true
}, {
  dataField: 'address',
  text: 'Address'
}];

console.log(teacher,"sti");
  return (<>
  <Link to="/createTeacher" className=' btn btn-outline-warning m-3'><span className='text-black'>Add Teachers</span></Link>
    
    <ToolkitProvider
  keyField="Teacher"
  data={ teacher }
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
         // defaultSorted={ defaultSorted } 
        />
      </div>
    )
  }
</ToolkitProvider>
 
  </>)
}
export default TeacherDetails