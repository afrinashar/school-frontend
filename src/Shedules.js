import {Form} from 'react-bootstrap';
import {Link} from "react-router-dom" 

const shedule =()=>{
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
    <h1>Teachers shedule</h1><table class="table">
    <thead>
      <tr>
        <th scope="col">S no</th>
        <th scope="col">Teacher Name</th>
        <th scope="col">9.30-10.30 AM</th>
        <th scope="col">10.30-11.30 AM</th>
        <th scope="col">11.30-12.30 AM</th>
        <th scope="col">02.00-03.00 PM</th>
        <th scope="col">03.00-04.00 PM</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td> 5</td>
        <td>1</td>
        <td>6</td>
        <td>3</td>
        <td>8</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td> 4</td>
        <td>2</td>
        <td>1</td>
        <td>5</td>
        <td>2</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td >peter</td>
        <td > 3</td>
        <td>8</td>
        <td>2</td>
        <td>4</td>
        <td>7</td>
      </tr>
    </tbody>
  </table></>)
    }
    export default shedule