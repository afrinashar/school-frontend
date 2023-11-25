import {Form} from 'react-bootstrap';
import {Link} from "react-router-dom" 
const Attendecet=()=>{
    return(<>
     <Link to={"/"}>back to home</Link>
    <Form className="d-flex">
    <Form.Control
      type="search"
      placeholder="Search"
      className="mx-5 my-4"
      aria-label="Search"
    />
   
  </Form>
    <h1>Teachers Attendence</h1><table class="table">
    <thead>
      <tr>
        <th scope="col">S no</th>
        <th scope="col">Student Name</th>
        <th scope="col">Attend</th>
        <th scope="col">Leaves</th>
        <th scope="col">edit</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>90</td>
        <td>1</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>90</td>
        <td>2</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td >peter</td>
        <td >MARK</td>
        <td>5</td>
      </tr>
    </tbody>
  </table> </> )
    }
    export default Attendecet