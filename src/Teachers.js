import {Form} from 'react-bootstrap';
import {Link} from "react-router-dom" 
const Teachers=()=>{
    return(<>
     <Link to={"/"}>back to home</Link>
    <Form className="d-flex">
    <Form.Control
      type="search"
      placeholder="Search"
      className="mx-5 my-4"
      aria-label="Search"
    />
   
  </Form> <button className="btn btn-outline-info">Add Student</button>
    <h1>Teachers Details</h1>
   <table class="table">
    <thead>
      <tr>
        <th scope="col">S no</th>
        <th scope="col">Student Name</th>
        <th scope="col">marks</th>
        <th scope="col">Class</th>
        <th scope="col">edit</th>
        <th scope="col">delete</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td><button>MARK</button></td>
        <td>1</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td><button>MARK</button></td>
        <td>2</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td >peter</td>
        <td ><button>MARK</button></td>
        <td>3</td>
      </tr>
    </tbody>
  </table> </>)
    }
    export default Teachers