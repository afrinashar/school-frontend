import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from "react-router-dom"
import DropDown from './component/DropDown';
const Header=()=>{
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "/students";
  };
    return(<>
      
        <nav class="navbar d-flex fixed-top navbar-light bg-light">

          <DropDown/>
   <button type="button" class="btn m-5  btn-primary:hover, btn-warning">
          <Link to={"/more"}OnClick={logOut}>  <span className='text-dark'>Log Out</span></Link>
        </button>

</nav>
    
    
    
    
    </>)
}
export default Header