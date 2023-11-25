import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from "react-router-dom"
const Header=()=>{
    return(<>
    <div className="header" >{['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary-primary  mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1"><Link to={"/students"}>Students Details</Link> </Nav.Link>
                  <Nav.Link href="#action2"><Link to={"/teachers"}>Teachers Details </Link></Nav.Link>
                  <NavDropdown
                    title="user"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/students"><Link to={"/students"}>Teachers</Link></NavDropdown.Item>
                    <NavDropdown.Item href="/students">
                    <Link to={"/students"}>Students</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  
                  </NavDropdown>
                </Nav>
                <button type="button" class="btn m-5 btn-danger">
          <Link to={"/more"}>Log Out</Link>
        </button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}</div>
    
    
    
    
    </>)
}
export default Header