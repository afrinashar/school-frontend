import {Form} from 'react-bootstrap';
import {Link} from "react-router-dom" 
const Marks=()=>{
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
     <h1>Students Attendence</h1><table class="table">
    <thead>
      <tr>
        <th scope="col">S no</th>
        <th scope="col">Student Name</th>
        <th scope="col">Tamil     
    </th>
        <th scope="col">English</th>
        <th scope="col">Maths</th>
        <th scope="col">Science</th>
        <th scope="col">Social Science</th>
        <th scope="col">Total</th>
        <th scope="col">Result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>90</td>
        <td>97</td>
        <td>98</td>
        <td>99</td>
        <td>95</td>
        <td>455</td>
        <td>pass</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>89</td>
        <td>90</td>
        <td>99</td>
        <td>91</td>
        <td>98</td>
        <td>430</td>
        <td>pass</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td >peter</td>

        <td>97</td>
        <td>77</td>
        <td>87</td>
        <td>77</td>
        <td>79</td>
        <td>380</td>
        <td>pass</td>
      </tr>
    </tbody>
  </table> </>)
    }
    export default Marks