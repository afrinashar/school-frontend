import BootstrapTable from 'react-bootstrap-table-next';
import { getMarks } from '../src/api';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
// import {
//   BsListUl,
//   BsThreeDotsVertical,
//   BsGrid3X3,
// } from "react-icons/bs";
  const MarkDetails = () => {
    const { SearchBar } = Search;

    const { data: Mark, isLoading  } = useQuery('Mark', getMarks);
    if (isLoading) {
        return <div>Loading...</div>;
      }
console.log(Mark,"stu");
    const columns = [{
  dataField: 'name',
  text: 'Name',
  sort: true, headerStyle: {
    backgroundColor: '#FFBD33',
    color:"#000000" 
  }
}, {
  dataField: 'Mark_id',
  text: 'Roll No',
  sort: true, headerStyle: {
    backgroundColor: '#FFBD33',
    color:"#000000" 
  }
}, {
  dataField: 'age',
  text: 'Age',
  sort: true, headerStyle: {
    backgroundColor: '#FFBD33',
    color:"#000000" 
  }
},{
  dataField: 'description',
  text: 'Description',
  sort: true, headerStyle: {
    backgroundColor: '#FFBD33',
    color:"#000000" ,
    
  }
} ,{
  dataField: 'isVerified',
  text: 'isVerified',
  sort: true, headerStyle: {
    backgroundColor: '#FFBD33',
    color:"#000000" 
  }
},];
const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total  ">
    Showing <span className='text-warning'>{ from }</span> to <span className='text-warning'>{ to }</span> of <span className='text-warning text-bold'>{ size }</span> Results
  </span>
);

const options = {
  paginationSize: 4,
  pageStartIndex: 0,
  // alwaysShowAllBtns: true, // Always show next and previous button
  // withFirstAndLast: false, // Hide the going to First and Last page button
  // hideSizePerPage: true, // Hide the sizePerPage dropdown always
  // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
  firstPageText: 'First',
  prePageText: 'Back',
  nextPageText: 'Next',
  lastPageText: 'Last',
  nextPageTitle: 'First page',
  prePageTitle: 'Pre page',
  firstPageTitle: 'Next page',
  lastPageTitle: 'Last page',
  showTotal: true,
  paginationTotalRenderer: customTotal,
  disablePageTitle: true,
  backgroundColor:"000000",
  sizePerPageList: [{
    text: '5', value: 5
  }, {
    text: '10', value: 10
  }, {
    text: 'All', value: Mark
  }] // A numeric array is also available. the purpose of above example is custom the text
};
console.log(Mark,options,"sti");
const rowStyle = { backgroundColor: '#eef2fc',color: '#000000'};

 
  return (<>
  <Link to={"/"} className=' btn btn-outline-warning m-3 border-0 text-black'>back to home</Link>
 <Link to="create" className='btn btn-outline-warning   float-end m-3'>Add </Link>    
    <ToolkitProvider
  keyField="Mark"
  data={ Mark }
  columns={ columns }
 
  search
 
>
  {
    props => (
      <div>
       
        <SearchBar className="border border-warning d-flex mr-5 border-opacity-50 fluid" { ...props.searchProps } />
        <hr />
        <BootstrapTable  className="m-3"
        rowStyle={ rowStyle }
          { ...props.baseProps }
        pagination={ paginationFactory(options) }  />
      </div>
    )
  }
</ToolkitProvider>
 
  </>)
}
export default MarkDetails