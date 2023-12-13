
import {Form} from 'react-bootstrap';
import {Link} from "react-router-dom" 
const More=()=>{
    return(<>
     <Link to={"/"} className=' btn btn-outline-warning  border-0 text-black'>back to home</Link>
    <Form className="d-flex">
    <Form.Control
      type="search"
      placeholder="Search"
      className="mx-5 my-4"
      aria-label="Search"
    />
   
  </Form>
    </>)
    }
    export default More