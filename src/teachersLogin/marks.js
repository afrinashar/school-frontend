import BootstrapTable from 'react-bootstrap-table-next';
import { getMarks } from '../api';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
 
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
 
import { Spinners } from '../assets/Spinners';

  const MarksDetails = () => {
    const { SearchBar } = Search;

    const { data: marks, isLoading  } = useQuery('Marks', getMarks);
    if (isLoading) {
        return  <Spinners/>
      }
console.log(marks,"stud");
    const columns = [{
  dataField: 'marks',
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

console.log(marks,"sti");
  return (<>
  <Link className=' btn btn-outline-warning m-3'><span className='text-black'>Add Marks</span></Link>
    
    <ToolkitProvider
  keyField="Marks"
  data={ marks }
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
export default MarksDetails