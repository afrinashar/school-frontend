import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from "react-router-dom"
const DropDown = () => {
  return (
   <>



<div className='d-flex '>

   <div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Users
  </button>
  <div class="dropdown-menu dropdown-menu-right">
    <button class="dropdown-item" type="button"><Link className='head  btn btn-outline-warning' to={"/students"}><span className='text-black'>Students Details</span></Link></button>
    <button class="dropdown-item" type="button"><Link className='head btn btn-outline-warning' to={"/teachers"}><span className='text-black'>Teachers Details</span> </Link></button>
    <button class="dropdown-item" type="button">Admin</button>
  </div>
</div>
<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Users
  </button>
  <div class="dropdown-menu dropdown-menu-right">
    <button class="dropdown-item" type="button"><Link className='head  btn btn-outline-warning' to={"/students"}><span className='text-black'>Students Details</span></Link></button>
    <button class="dropdown-item" type="button"><Link className='head btn btn-outline-warning' to={"/teachers"}><span className='text-black'>Teachers Details</span> </Link></button>
    <button class="dropdown-item" type="button">Admin</button>
  </div>
</div>
   
   
  </div> </>
  )
}

export default DropDown
